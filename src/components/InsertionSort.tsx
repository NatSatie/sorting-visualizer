import * as React from 'react';
import {ChangeEvent, useState}  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InsertionSort() {
  const [arr, setArr] = useState<String>('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setArr(event.target.value)
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          onChange={handleChange}
          label="Lista de números"
          variant="filled"
        />
      </Box>
    </div>
  );
}

export default InsertionSort;
