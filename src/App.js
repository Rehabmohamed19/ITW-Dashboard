import { Button, Table } from '@mui/material';
import { TextField } from '@mui/material';
import React from 'react';
import Header from './Navbar';
import BasicTable from "./Table"
import PermanentDrawerLeft from "./Sidebar"
import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Controller from './Controller';
import Form from "./Form"
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  p: 4,
};


function App() {
  const [rows, setRows] = useState([
    { id: 1, lastName: 'Snow@gmail.com', firstName: 'Jon', group: 'Office' },
    { id: 2, lastName: 'Lannister@gmail.com', firstName: 'Cersei', group: 'Office' },
    { id: 3, lastName: 'Lannister@gmail.com', firstName: 'Jaime', group: 'Head' },
    { id: 4, lastName: 'Stark@gmail.com', firstName: 'Arya', group: 'Office' },
    { id: 5, lastName: 'Targaryen@gmail.com', firstName: 'Daenerys', group: 'Head' },
    { id: 6, lastName: 'Melisandre@gmail.com', firstName: null, group: 'Managers' },
    { id: 7, lastName: 'Clifford@gmail.com', firstName: 'Ferrara', group: 'Head' },
    { id: 8, lastName: 'Frances@gmail.com', firstName: 'Rossini', group: 'Office' },
    { id: 9, lastName: 'Roxie@gmail.com', firstName: 'Harvey', group: "Managers" },
  ])
  const [open, setOpen] = useState(false);
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [show, setShow] = useState(false);

  const [rowToEdit, setRowToEdit] = useState(null);

  // const ChangeRow = ( e, firstName, email) => {
  //   // setmodaldata([...rows]);
  //   handleOpen();
  //   // setuserName(e.target.firstName.value)
  // }
const handleEditRow = ()=>{
  setRowToEdit()
  handleOpen()
}
  

  const handleOpen = () => {
  setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const handleSearch = () => {
    if (username == '' && email == '' && status == '') {
      return rows;
    }
    else {
      return rows.filter((row) => {
        return row.firstName == (username) || row.lastName == (email) || row.group ==(status);
      })
    }
  }
  return (
    <div className="App">

      <Box sx={{ display: 'flex' }}>
        <PermanentDrawerLeft />
        <div style={{ width: "100%" }}>
          <Header />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className='headline'>User Managmenet</h3>
            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                padding: "20px",
                height: "5px",
                marginTop: "10px"
              }}
              onClick={handleOpen}
            >
              <b>+ </b> &nbsp; Add New
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>

                <Form rows={rows} setRows={setRows} show={show} setShow={setShow}
                defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
              </Box>

            </Modal>
          </div>
          <Controller username={username} setuserName={setuserName} email={email} setEmail={setEmail} status={status} setStatus={setStatus}/>

          <BasicTable rows={handleSearch()} handleEditRow={handleEditRow} />
        </div>

      </Box>
    </div>
  );
}

export default App;
