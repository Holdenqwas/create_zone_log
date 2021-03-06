import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const ValidationTextFields = ({saved_data}) => {
  if (!saved_data)
  {
    saved_data='ZONE_LOG';
  }
  const [term, setTerm] = useState(saved_data);

  const handleChange = (e) => {
    setTerm(e.target.value); 
    document.getElementById('name_zone_log').value = e.target.value;
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{ m: 1, minWidth: 230 }}
          id="outlined-error-helper-text"
          name="new_name"
          label="Название кривой"
          value={term}
          onChange={handleChange}
          error={!Boolean(...term)}
          helperText={term ? "" : "Новое название не может быть пустым"}
        />
      </div>
    </Box>
  );
}
