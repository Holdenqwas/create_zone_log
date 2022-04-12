import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const SelectName = ({nameLabel, nameElement, data, saved_data}) => {
  if (!saved_data) {
    saved_data = "";
  }
  const [name, setName] = React.useState(saved_data);
  if (!data) {
    data = ["Undef"];
  }
  const handleChange = (event) => {
    setName(event.target.value);
    document.getElementById(nameElement).value = event.target.value;
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{nameLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={name}
          name={nameLabel}
          onChange={handleChange}
          autoWidth
          label={nameLabel}
        >
          {data.map((name) => {
            return (
              <MenuItem key={name} value={name}>{name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  );
}