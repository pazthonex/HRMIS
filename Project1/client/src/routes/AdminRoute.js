
import React, {useEffect, useState} from "react";
import { Route,Routes, useNavigate } from "react-router-dom";


import AdminLayout from '../layouts/admin/Main';
import Dashboard from '../components/admin/Dashboard';
import Employee from '../components/admin/Employee';

import EmployeeProfile from '../components/admin/Employee/Profile';

import EmployeeProfileEdit from '../components/admin/Employee/EditEmployee';

const  AdminRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminLayout/>} >
                <Route index element={<Dashboard/>} />
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='employee' element={<Employee/>} />
                <Route path='employee/profile' element={<EmployeeProfile/>} >
                     <Route path=":id" element={<EmployeeProfileEdit />} />
                </Route>
                
                {/* <Route path='employee/profile/edit' element={<EmployeeProfileEdit/>} /> */}
            </Route>
        </Routes>

    )
}

export default AdminRoute