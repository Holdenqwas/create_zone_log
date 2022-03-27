import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { SelectName } from './select_name';
import { ValidationTextFields } from './text_input';
import { TransferList } from './transferList';
import Chip from '@material-ui/core/Chip';
//import usePromise from 'react-use-promise';
//import proxyRms from './proxyRms';


export const Main = () => {
    /*
        const [response, error] = usePromise(
        () => proxyRms.uipy.get_trj(),[]
        );
    */
    let response = ['1', '2', '3'];
    return (
        <Grid
            container
            spacing={3}
            justifyContent="center"
        //alignItems="center"
        >
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
                <SelectName
                    nameLabel="Коллекция"
                    data={response} />
            </Grid>
            <Grid item xs={3}>
                <SelectName
                    nameLabel="Таблица Well picks"
                    data={response} />
            </Grid>
            <Grid item xs={3}>
                <ValidationTextFields />
            </Grid>
            <Grid item>
                <Grid item xs={12}>
                    <Chip label="Horizons" variant="outlined" color="primary" />
                    <TransferList />
                </Grid>
            </Grid>
            <Grid item>
                <Grid item xs={12}>
                    <Chip label="Faults" variant="outlined" color="primary" />
                    <TransferList />
                </Grid>
            </Grid>
        </Grid >
    );
}
