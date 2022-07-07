import * as React from 'react';
import {FormEvent, useState}  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function InsertionSort() {
  const [arr, setArr] = useState<Array<Number>>([])
  const [input, setInput] = useState<String>('')

  function strToArray(str: String){
    return str.split(",").map( elem => {
      return parseInt(elem, 10)
    })
  }

  return (
    <div>
      <TextField id="filled-basic" label="Filled" variant="filled" onChange={(e) => setInput(e.target.value)}/>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={() => {
        let res = strToArray(input)
        setArr(res)
        console.log(input)
        console.log(res)
      }}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default InsertionSort;
