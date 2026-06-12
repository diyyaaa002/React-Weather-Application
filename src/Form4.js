import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from 
'@mui/material/Checkbox';
import "./Form4.css"
function Form4()

{
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <div id='main'> <center>
            <h1>REGISTRATION FORM</h1>
            <div>
         First Name
        <TextField id="filled-basic" label="" variant="filled" />
        Middle Name
        <TextField id="filled-basic" label="" variant="filled" />
        Last Name
        <TextField id="filled-basic" label="" variant="filled" />
        </div>
        <br></br><br></br>
        Contact 
        <TextField id="filled-basic" label="" variant="filled" />
        <br></br><br></br>
        Email
        <TextField id="filled-basic" label="" variant="filled" />
        <br></br><br></br>
        Address
        <TextField id="filled-basic" label="" variant="filled" />
        <br></br><br></br>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <br></br><br></br>
    Course<br></br>
    CSE <Checkbox {...label} defaultChecked />
    IT <Checkbox {...label} defaultChecked />
   
    AIML <Checkbox {...label} defaultChecked />
    <br></br><br></br>
        <Button variant="contained">Submit</Button>
        </center>
        </div>
    )
}
export default Form4;