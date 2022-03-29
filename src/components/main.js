import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { SelectName } from './select_name';
import { ValidationTextFields } from './text_input';
import { TransferList } from './transferList';
import Chip from '@material-ui/core/Chip';



export const Main = () => {
    const [list, setList] = React.useState([[],[],[],[],[],[]]);

    React.useEffect(() => {
        let p = rms.uipy.get_data();
        p.then(result => {
            setList(result);
        })
    }, [])
    return (
        <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12}></Grid>
            <Grid item xs={4}>
                <SelectName
                    nameLabel="Коллекция"
                    nameElement="name_collection"
                    data={list[0]} />
            </Grid>
            <Grid item xs={4}>
                <SelectName
                    nameLabel="Таблица Well picks"
                    nameElement="name_well_picks_set"
                    data={list[1]} />
            </Grid>
            <Grid item xs={4}>
                <SelectName
                    nameLabel="Траектория"
                    nameElement="name_traj"
                    data={list[4]} />
            </Grid>
            <Grid item xs={4}>
                <SelectName
                    nameLabel="Log run"
                    nameElement="name_log_run"
                    data={list[5]} />
            </Grid>
            <Grid item xs={4}>
                <ValidationTextFields />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={9}>
                <Chip label="Horizons" variant="outlined" color="primary" />
                <TransferList 
                    nameElement="name_horizons"
                    data={list[2]}/>
            </Grid>
            <Grid item xs={9}>
                <Chip label="Faults" variant="outlined" color="primary" />
                <TransferList 
                    nameElement="name_faults"
                    data={list[3]}/>
            </Grid>
        </Grid >
    );
}
