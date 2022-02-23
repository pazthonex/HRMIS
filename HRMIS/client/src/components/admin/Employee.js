import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import {CardMedia,Avatar} from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup'

import InsertModal from './modal/employee/InsertEmployee';
import UpdateModal from './modal/employee/EditEmployee';

import Addemployee from './Employee/AddEmployee';


import Button from '@material-ui/core/Button';

import { toast } from 'react-toastify';
import DeleteModal from './modal/employee/DeleteEmployee';
import { Backdrop, CircularProgress } from '@mui/material';
import { getAllEmployee } from '../../redux/actions/employee';

import TableData from './Employee/TableData';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Employee = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const employeesData = useSelector(state => state.employees)
    //const auth = useSelector((state) => state.auth);

    const [open, setOpen] = useState(false);
    const [eopen, esetOpen] = useState(false);
    const [dopen, setDopen] = useState(false);
    const [id, setId] = useState(0);
   
    const [employee , setEmployee] = useState([])
  
    const [loading , setLoading] = useState(false);
   
    const handleOpenModal = () => {
      //  setOpen(!open)
        navigate('/admin/employee/profile', { replace : true})
    }

    const handleditEmployee = (id) => {
        esetOpen(true)
        setId(id)
    }
    const handldeleteEmployee = (id) => {
        setId(id)
        setDopen(true)
    
    }
    // useEffect(()=> {
    //   // console.log('effects employee:',employeesData);
      
    //     setEmployee(employeesData.employees);
    //     setLoading(false)
    //     // if(stateStaff.staffs){
    //     //     setLoading(false)
    //     //     console.log('REDUCER STAFF NAGBAG.O');
    //     //     setStaffs(stateStaff.staffs);
    //     // }
    // },[employeesData]);

     const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log('event value:',newValue);
    };

  

    var EmployeesRow = '';
   if(loading){
       return  ( 
        <Backdrop 
            sx={{ color : '#fff' , zIndex : (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            >
             <CircularProgress color='inherit' />
        </Backdrop>
       )
       
   } 
    return (
        <div className="content">
            <InsertModal open={open} setOpen={setOpen}  />
            <UpdateModal eopen={eopen} esetOpen={esetOpen} id={id} />
            <DeleteModal dopen={dopen} setDopen={setDopen} id={id} />
           
            <div className="container-fluid">
                <div className="row">
                   <nav aria-label="breadcrumb" role="navigation">
                        <ol className="breadcrumb pull-left" style={{ backgroundColor : 'transparent' }}>
                            <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                            <li className="breadcrumb-item active"><Link to="/admin/employee">Employee List</Link></li>
                        </ol>
                    </nav>
                    <div className="col-md-12">
                        <div className="card">
                                <div className="content table-responsive" > 
                                       <button className='btn btn-sm btn-default pull-left' onClick={handleOpenModal}>Add New</button>
                                        <h5>Employee List</h5>
                                        <TableData  esetOpen={esetOpen} setDopen={setDopen} setId={setId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Employee;
