import React, { useEffect ,useState } from 'react'
//import  axios  from 'axios'
//import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { Route, Routes,Outlet } from 'react-router-dom'
import { getAllDepartment } from '../../redux/actions/department';
import { getAllEmployee } from '../../redux/actions/employee';
// import { checkauthorize } from '../../redux/actions/auth';
// import { getStaffs } from '../../redux/actions/staff';
// import { getCourse, getStudents } from '../../redux/actions/student';
//import AdminRoute from '../../routes/path/AdminRoute';

import { Footer } from './Footer';
import { Header } from './Header';
import { SideBar } from './SideBar';
// import { Backdrop, CircularProgress } from '@mui/material';
// import Home from '../../components/admin/Dashboard';
// import Students from '../../components/admin/Students';
// import Employee from '../../components/admin/Employee';


const Main = () => {

   const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllEmployee());
        dispatch(getAllDepartment());
    },[]);



//  axios.interceptors.response.use(function (res){
//         return res; 
//     }, function  (error) {
//         if(error.response.status === 403){
//           //  console.log('403');
//            // swal('Forbidden',error.response.data.message,'warning');
//             history.push('/login');
//         }else if(error.response.status === 404) { ///page not found
//            // swal('Forbidden','Page Not Found','warning');
//             history.push('/page404');
//           // console.log('404');
//         }
//         else if(error.response.status === 401) { ///page not found
//            // swal('Forbidden','Page Not Found','warning');
//            // history.push('/page404');
//            console.log('401');
//           history.push('/admin/login');
//         }
//        setloading(false)
//         return Promise.reject(error);
//     }
    
//     )
// },[auth]);

//   if(loading){
//        return  ( 
//         <Backdrop 
//             sx={{ color : '#fff' , zIndex : (theme) => theme.zIndex.drawer + 1 }}
//             open={loading}
//             >
//              <CircularProgress color='inherit' />
//         </Backdrop>
//        )
       
//    }


    return (
        <div class="wrapper">
           <SideBar/>
               <div class="main-panel">
                        <Header/>
                           <Outlet />
                        <Footer/>
                 </div>
        </div>
    )
}
export default Main;
