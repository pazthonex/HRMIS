import React, {useEffect,useState } from 'react';
import {BrowserRouter as Router, Route, Routes,useNavigate,useRoutes} from 'react-router-dom';

import './App.css';

import Admin from './routes/AdminRoute';
import Hr from './routes/HrRoute';


import LoginAdmin from './components/admin/Login';
import LoginHr from './components/hr/Login';
import Home from './components/Home';



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page404 from './components/Page404';
import Authorization from './Authorization';


const type = {
  'hr' : 203,
  'admin': 808
}

function App() {

  return (
    <div className="App">
      <ToastContainer/>
                   {/* Note: put last line the path='/' */}
                 
        <Router>
            <Routes>

                 {/* <Route exact path='/admin/login' component={Login} />
                 <Route exact path='/auth/login' component={LoginStaff} />
                 <Route exact path='/login' component={LoginStudent} /> */}

                {/* <Route path="login" element={<LoginStudent />} />*/}
               
                <Route path="hr/login" element={<LoginHr />} />
                <Route path="admin/login" element={<LoginAdmin />} />


                 <Route element={<Authorization allowedRoles={[type.admin]} />}>
                    <Route path="admin/*" element={<Admin />} />
                 </Route>
                 <Route element={<Authorization allowedRoles={[type.hr]} />}>
                      <Route path="hr/*" element={<Hr/>} /> 
                  </Route>
                 <Route path='*' element={<Page404/>} />

                 <Route path="/" element={<Home />} /> 
               
            </Routes>
        </Router>
    </div>
  );
}

export default App;
