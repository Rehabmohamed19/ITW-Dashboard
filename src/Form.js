import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import BasicTable from './Table';



export default function Form({ rows, setRows, show, setShow , modaldata, setmodaldata ,defaultValue}) {
    
    const [inputEmail, setInputEmail] = useState(defaultValue || "");
    const [inputUsername, setInputUsername] = useState (defaultValue || "");
    const [inputGroup, setInputGroup] = useState( defaultValue || "");

    // const handleReset = (e) => {
    //     e.preventDefault();
    //     inputEmail.current.value = ""
    //     // e.target.inputUsername.value=""
    //     // e.target.inputGroup.value=""
    // };

    const handleUsername = (e) => {
        setInputUsername(e.target.value);
        // const user_name=setInputUsername(e.target.value);

    };
    const handleEmail = (e) => {
        setInputEmail(e.target.value);
        // const email_address=setInputEmail(e.target.value);

    };
    const handleGroup = (e) => {
        setInputGroup(e.target.value);
        // const group_name= setInputGroup(e.target.value);

    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const row = {
            id: 90,
            firstName: inputUsername,
            lastName: inputEmail,
            group: inputGroup,
        }
        setRows([...rows, row]);
        // setRows(added);

    }
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    }


    return (
        <>
            <div style={{ backgroundColor: "blue", display: "flex", justifyContent: "space-between" }}>
                <h3 onClick={handleShow} style={{ color: "white", height: "30px", width: "100%", padding: "6px 0 0 20px " }}>Add New User</h3>

            </div>
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
                        id="outlined-disabled"
                        label="Username"
                        placeholder="Enter username"
                        onChange={handleUsername}
                        value={inputUsername}
                    />
                    <TextField fullWidth
                        id="outlined-password-input"
                        label="Email Address"
                        type="email"
                        placeholder='Enter email address'
                        onChange={handleEmail}
                        value={inputEmail}
                    >
                    </TextField>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choose user group</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            // onChange={handleChange}
                            onChange={handleGroup}
                            value={inputGroup}
                        >
                            <MenuItem value="Office" >Office</MenuItem>
                            <MenuItem value="Head">Head</MenuItem>
                            <MenuItem value="Managers">Managers</MenuItem>
                        </Select>
                    </FormControl>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button>
                            Reset fields
                        </button>
                        <div>
                            <span>
                                <button onClick={handleClose}> Cancel </button>

                            </span>
                            <span>

                                <button onClick={handleSubmit}> Add User</button>
                            </span>
                        </div>
                    </div>
                    <div style={{color : "grey"}}>Press outside the form to see the new row</div>

                </div>


            </Box>
        </>

    );
}