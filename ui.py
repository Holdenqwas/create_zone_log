# -*- coding: utf-8 -*-
import roxar.rms


def get_data():
    name_col = []
    for collection in project.collections:
        name_col.append(collection.name)

    name_pick_set = []
    for well_pick_set in project.well_picks.sets:
        name_pick_set.append(well_pick_set.name)

    name_hor = []
    for hor in project.horizons:
        name_hor.append(hor.name)

    name_fault = []
    for fault in project.faults:
        name_fault.append(fault.name)

    name_traj = []
    name_log_run = []
    for well in project.wells:
        for traj in well.wellbore.trajectories:
            name_traj.append(traj.name)
            for log_run in traj.log_runs:
                name_log_run.append(log_run.name)
        break

    ans = [name_col, name_pick_set, name_hor, name_fault, name_traj, name_log_run]
    roxar.rms.error(f"1-{', '.join(ans[0])}; 2-{', '.join(ans[1])}; 3-{', '.join(ans[2])}; 4-{', '.join(ans[3])}; 5-{', '.join(ans[4])}; 6-{', '.join(ans[5])}")
    return ans
