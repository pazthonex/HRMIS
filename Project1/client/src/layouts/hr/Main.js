import React from 'react'
import { Route, Routes,Outlet } from 'react-router-dom'
//import EmployeeRoute from '../../routes/path/EmployeeRoute';

//import Home from "../../components/employee/Dashboard";
//import Homes from "../../components/employee/Home2";

import { Footer } from './Footer';
import { Header } from './Header';
import { SideBar } from './SideBar';



const Dashboard = () => {
    return (
        <div class="wrapper">
           <SideBar/>
               <div class="main-panel">
                        <Header/>
                            <Outlet/>
                        <Footer/>
                 </div>
        </div>
    )
}


export default Dashboard;
