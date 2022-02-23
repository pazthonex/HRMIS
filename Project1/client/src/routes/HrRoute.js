import axios from "axios";
import React, {useEffect, useState} from "react";
import { Redirect, Route, Routes,  useNavigate } from "react-router-dom";

import HrLayout from '../layouts/hr/Main';

import Dashboard from '../components/hr/Dashboard';

const HrRoute = () => {

    return (

    <Routes>
        <Route path='/' element={<HrLayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            {/* <Route path='students' element={<Students/>} />
            <Route path='staff' element={<Staff/>} /> */}
        </Route>
    </Routes>
    )
}

export default HrRoute