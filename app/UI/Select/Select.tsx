import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

type TravelMode = google.maps.TravelMode;

export default function BasicSelect({handler}) {
  const [mode, setMode] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value);
    handler(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} width={100} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value={"DRIVING"}>Driving</MenuItem>
          <MenuItem value={"TRANSIT"}>Transit</MenuItem>
          <MenuItem value={"WALKING"}>Walking</MenuItem>
          <MenuItem value={"BICYCLING"}>Bicycling</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}