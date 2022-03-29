# -*- coding: utf-8 -*-
import json
import roxar.rms


def run(config):
    roxar.rms.info(f"This data is available to use: {json.dumps(config)}")
    name_collection = config['name_collection']
    name_well_picks_set = config['name_well_picks_set']
    name_horizons = config['name_horizons']
    name_faults = config['name_faults']
    name_zone_log = config['name_zone_log']
    name_traj = config['name_traj']
    name_log_run = config['name_log_run']

    pick_dict = dict()
    
    def number_zone(cur, next=None):
        if cur[0] == "_f" and next[0] == "_f":
            return None    
        elif cur[0] == "_f":    
            for number, name_h in enumerate(name_horizons):
                if next[0] == name_h:
                    return number        
        else:
            for number, name_h in enumerate(name_horizons):
                if cur[0] == name_h:
                    return number+1


    def generate_zone_log(hor, fault, well, name_horizons):
        if not fault:
            return hor
        if not hor:
            '''print("Can't generate ZONE_LOG for well:", well, ", need more then zero horizon pick")'''
            return []
            
        log_data = []

        start_depth = hor[0][1]
        last_depth = hor[-1][1]

        del_left_index = 0
        del_right_index = None
        for number, fa in enumerate(fault):
            if fa[1] < start_depth:
                try:
                    if fault[number+1] < start_depth:
                        del_left_index = number
                        continue
                    else:
                        break
                except:
                    break
        
        if del_left_index != 0:
            del_left_index += 1
        if hor[0][0] == name_horizons[0] and fault[del_left_index][1] < start_depth:
            del_left_index += 1
        fault = fault[del_left_index:]

        for number, fa in enumerate(fault):
            if fa[1] > last_depth:
                del_right_index = number+1
                break
            
        if del_right_index != None:
            if hor[-1][0] == name_horizons[-1]:
                del_right_index -= 1
            fault = fault[:del_right_index]
        log_data = hor + fault
        log_data = sorted(log_data, key=lambda i: i[1])
        return log_data
        
    for collection in project.collections:
        if collection.name == name_collection:
            for well in collection.wells:
                pick_dict[str(well)] = [[],[]]

    well_pick_set = project.well_picks.sets[name_well_picks_set]

    for pick in well_pick_set:
        try:
            if pick.type == roxar.WellPickType.horizon and pick.intersection_object.name in name_horizons:
                pick_dict[pick.trajectory.wellbore.well.name][0].append([pick.intersection_object.name, round(pick.get_values()['MD'], 1)])
            elif pick.type == roxar.WellPickType.fault and pick.intersection_object.name in name_faults:
                pick_dict[pick.trajectory.wellbore.well.name][1].append(["_f", round(pick.get_values()['MD'], 1)])
        except:
            continue

    arr_zone = []
    for h in name_horizons:
        for zone in project.zones:
            if h == zone.horizon_above.name:
                arr_zone.append(zone.name)
        
    for collection in project.collections:
        if collection.name == name_collection:
            for well in collection.wells:
                roxar.rms.info(f'Create zone log for well: {well}')
                log_run = well.wellbore.trajectories[name_traj].log_runs[name_log_run]
                md = log_run.get_measured_depths()
                zone_log = log_run.log_curves.create_discrete(name_zone_log)
                zone_log_data = zone_log.get_values()
                
                raw_data = pick_dict[str(well)]
                data = generate_zone_log(sorted(raw_data[0], key=lambda i: i[1]), sorted(raw_data[1]), well, name_horizons)
                if len(data) < 2:
                    roxar.rms.info(f'Need fault or horizon in well: {well}') 
                    continue
                index = 0
                points_number=[]
                cur_depth = data[index][1]
                next_depth = data[index+1][1]
                for number, depth in enumerate(md):
                    if depth > cur_depth and depth <= next_depth:
                        points_number.append(number)
                    elif md[number] == md[-1]:
                        zone_log_data[points_number] = number_zone(data[index])
                        zone_log_data[-1] = number_zone(data[index])
                        points_number=[]
                    elif depth > next_depth:
                        points_number.append(number)
                        name_zone = number_zone(data[index], data[index+1])
                        if name_zone == None:
                            name_zone = number_zone(data[index-1], data[index])
                        zone_log_data[points_number] = number_zone(data[index], data[index+1])
                        points_number=[]
                        index += 1
                        if index >= len(data) - 1:
                            break
                        cur_depth = data[index][1]
                        next_depth = data[index+1][1]
                zone_log.set_values(zone_log_data)
                code_names = zone_log.get_code_names()
                for key in code_names:
                    code_names[key] = arr_zone[key-1]
                zone_log.set_code_names(code_names)

    roxar.rms.info('DONE')