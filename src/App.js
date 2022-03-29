import {Head} from './components/head';
import {Main} from './components/main';


function App() {
  return (
    <div className="App">
      <Head></Head>  
      <Main></Main>
      <input type="text" data-rms-stored name="name_collection" id="name_collection" value=""></input>
      <input type="text" data-rms-stored name="name_well_picks_set" id="name_well_picks_set" value=""></input>
      <input type="text" data-rms-stored name="name_horizons" id="name_horizons" value=""></input>
      <input type="text" data-rms-stored name="name_faults" id="name_faults" value=""></input>
      <input type="text" data-rms-stored name="name_zone_log" id="name_zone_log" value="ZONE_LOG"></input>
      <input type="text" data-rms-stored name="name_traj" id="name_traj" value=""></input>
      <input type="text" data-rms-stored name="name_log_run" id="name_log_run" value=""></input>
    </div>
  );
}

export default App;
