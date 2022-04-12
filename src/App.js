import {Head} from './components/head';
import {Main} from './components/main';

let saved_data;
rms.onPluginSave(function() {
  console.log('Saved data');
  return {'name_collection': document.getElementById('name_collection').value,
          'name_well_picks_set': document.getElementById('name_well_picks_set').value,
          'name_horizons': document.getElementById('name_horizons').value,
          'name_faults': document.getElementById('name_faults').value,
          'name_zone_log': document.getElementById('name_zone_log').value,
          'name_traj': document.getElementById('name_traj').value,
          'name_log_run': document.getElementById('name_log_run').value};
}); 
rms.onPluginLoaded(function(data) {
  document.getElementById('name_collection').value = (data['name_collection'] || '');
  document.getElementById('name_well_picks_set').value = (data['name_well_picks_set'] || '');
  document.getElementById('name_horizons').value = (data['name_horizons'] || '');
  document.getElementById('name_faults').value = (data['name_faults'] || '');
  document.getElementById('name_zone_log').value = (data['name_zone_log'] || 'ZONE_LOG');
  document.getElementById('name_traj').value = (data['name_traj'] || '');
  document.getElementById('name_log_run').value = (data['name_log_run'] || '');
  saved_data = data;
  
});
function App() {
  
  return (
    <div className="App">
      <Head></Head>  
      <Main saved_data={saved_data}></Main>
    </div>
  );
}

export default App;
