import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import * as React from 'react'

type DataProps = {
    cookName: string,
    cookTemp: number,
    cookTime: number,
};

export default function CookForm() {
    const [data, setData] = useState<DataProps>({
        cookName: "",
        cookTemp: 225,
        cookTime: 0
  });

  const handleChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        name: {value: string};
        value: {value: number | string}
    }
    const name = target.name.value;
    const value = target.value.value;
    setData((prevData) => {
        return ({...prevData, [name]: value});
    })
  };

  const [temp, setTemp] = useState(225);
  const handleSliderChange = (e: Event, newTemp: number) => {
    setTemp(newTemp);
    return (data.cookTemp = newTemp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCook(data);
    setData({
      cookName: "",
      cookTemp: 225,
      cookTime: ""
    });
  };

  const [show, setShow] = useState(false)
}

return (
    <>
    {show ? <form onSubmit={handleSubmit}>
    <Box sx={{width: "100%", maxWidth: 360 }}>
      <FormControl className="FormElement">
        <TextField 
          id="outlined-basic" 
          label="Name" variant="outlined" 
          name="cookName" 
          onChange={handleChange}
        />
      </FormControl>
      <FormControl className="FormElement" sx={{marginTop: 1}}>
        <TextField 
          id="outlined-basic" 
          label="Time (in minutes)" 
          variant="outlined" 
          name="cookTime"
          onChange={handleChange} 
          />
      </FormControl>
      <InputLabel className="FormElement">Cook Temperature: {temp}</InputLabel>
      <Slider sx={{ width: "93%", maxWidth: 360, marginLeft: 1.5, marginTop: -1.5 }}
        size="small"
        defaultValue={225}
        aria-label="Always Visible"
        valueLabelDisplay="auto"
        min={165}
        max={400}
        step={5}
        name="cookTemp"
        value={typeof temp === 'number' ? temp : 0}
        onChange={handleSliderChange}
            aria-labelledby="input-slider"
      />
      <Button variant="contained" type="submit" onSubmit={handleChange}>
        Add Cook
      </Button>
    </Box>
    
 </form> : null}
    {!show ? <Button variant="outlined" size="small" className="FormElement" onClick={() => setShow(!show)}>
            Add A Cook
    </Button> : null}
    </>
  );
}
