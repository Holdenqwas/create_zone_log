import roxar.rms


def get_trj():
	lst = set()
	for well in project.wells:
		for wellbore in well.all_wellbores:
			for trajectory in wellbore.trajectories:
				lst.add(trajectory.name)
	return lst