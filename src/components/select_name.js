import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const SelectName = ({nameLabel, data}) => {
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
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
              <MenuItem value={name}>{name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  );
}