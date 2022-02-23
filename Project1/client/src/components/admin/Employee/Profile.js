import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { Backdrop, CircularProgress } from '@mui/material';


import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';



const Profile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const employeesData = useSelector(state => state.employees)
    const [loading,setLoading] = useState();

    
   

   
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
            <div className="container-fluid">
                <div className="row">

                   <nav aria-label="breadcrumb" role="navigation">
                         <ol className="breadcrumb pull-left" style={{ backgroundColor : 'transparent' }}>
                            <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/admin/employee">Employee List</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/employee/profile">Profile</Link></li>
                        </ol>
                    </nav>
                    
                    <div className="col-md-12">
                        
                        <div className="card">

                               
                        <div className="nav-tabs-navigation">
                                    <div className="nav-tabs-wrapper">
                                        <ul id="tabs" className="nav nav-tabs" data-tabs="tabs">
                                            <li className="active"><a href="#home" data-toggle="tab"><i className='fa fa-user'></i> Personal Profile</a></li>
                                            <li><a href="#profile" data-toggle="tab"> <i className='fa fa-address-card'></i> Address</a></li>
                                            <li><a href="#messages" data-toggle="tab">References</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="my-tab-content" className="tab-content text-center">
                                    <div className="tab-pane active" id="home">
                                        <AddEmployee/>
                                    </div>
                                    <div className="tab-pane" id="profile"> 
                                        <h2>Address</h2>
                                            
                                    </div>
                                    <div className="tab-pane" id="messages">
                                        <h3>References</h3>
                                            <div className='card'>
                                                <div className='card-header'>
                                                </div>
                                                <div className='card-body'>
                                                    <h4>Hello </h4>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Profile;
