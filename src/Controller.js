import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import CreateIcon from '@mui/icons-material/Create';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Controller({username, setuserName , email , setEmail , setStatus}) {

    // const [age, setAge] = useState('');
    const [value, setValue] = useState(dayjs('2022-04-17'));

    // const count=0;
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    width:"70%"

                }}>
                <Box
                    className='headline'
                    sx={{
                        width: 300,
                        maxWidth: '50%',
                    }}
                >
                    <TextField fullWidth 
                    label="Search by Email" 
                    id="fullWidth"
                    onChange={(e)=>{setEmail(e.target.value)}}

                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        marginLeft: "20px"
                    }}
                >
                    <TextField
                        id="demo-helper-text-aligned"
                        label=" Search by username"
                        onChange={(e)=>{setuserName(e.target.value)}}
                    />

                </Box>
                <Box sx={{ minWidth: 120, marginLeft: "20px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            onChange={(e)=>{setStatus(e.target.value)}}
                            >
                            <MenuItem value="Head">Head</MenuItem>
                            <MenuItem value="Office">Office</MenuItem>
                            <MenuItem value="Managers">Managers</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    sx={{
                        marginLeft: "15px",
                        marginTop: "-7px"
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
                            <DatePicker

                                label="Controlled picker"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>

            </Box>
            <Box sx={{ marginTop: "20px", marginBottom:"20px" , display: "flex", justifyContent: "space-evenly", width: "70%" }}>
                <div> 0 Selected  | </div>
                <button>
                <CreateIcon></CreateIcon>
                </button>
                <button>
                    <DoNotDisturbIcon></DoNotDisturbIcon>
                </button>
                <button>
                    <LockIcon></LockIcon>
                </button>
                <button> Assign to Profile</button>
                <button> Assign to Group</button>
                <button>
                    <MoreVertIcon></MoreVertIcon>
                </button>
                <div style={{ textDecoration: "underline" }}>Unselect All</div>
            </Box>
        </>
    );
}