// import React, {useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link,  useNavigate,useLocation } from 'react-router-dom'
// //import { checkauthstaff, login,logout } from '../../redux/actions/auth';

// //Notify
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// //import { SUCCESSLOGIN } from '../../redux/constant';
// import hasToken from '../../layouts/auth';

// const Login = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const auth = useSelector((state) => state.auth);
//     const [error, setError] = useState([]);
//     const [isLog, setIsLog] = useState();
//     const [loading, setLoading] = useState(true);

//    // const from = location.state?.from?.pathname || "/";
//     const [account, setAccount] = useState({
//         username: '',
//         password :'',
//         role : 2
//     });

//     const inputChange = (e) => {

//        //console.log(props);
//         setAccount({ ...account , [e.target.name] : e.target.value })
//        // setAction(1)
//       // setCstaff(2)
//     }

//    // console.log('FROM:',from);
//    const submitLogin = async(e) => {
//     e.preventDefault();

//     const response = await login(account);
//     console.log('Responsess:', response)
//     if(response.status === 200){
//         toast(response.data.message);
//         setError('')
//         console.log('sucess: ',response.data);
//         dispatch({ type: SUCCESSLOGIN, payload: response.data })
//         navigate('/staff', { replace: true });
//        // history.push('/staff')
//     }else if(response.status === 400){
//         console.log('error: ',response.errors);
//         setError(response.errors)
//        // dispatch({ type: VALIDATE_INPUT_ERROR, payload: response.errors })
//     }else if(response.status === 401){
//         setError(response.errors)
//         console.log('error: ',response.errors);
//         //dispatch({ type: AUTHERROR, payload: data.errors })
//     }

//    // console.log(account);
//        // dispatch(login(account));
//    }


// //    useEffect(()=>{
// //     setIsLog(hasToken())
// //    },[])
  

// //    useEffect(()=> {
   
// //     if(hasToken()){
// //         console.log('LOGGED IN STAFF');
// //         if(auth.isAuthStaff){
           
// //            history.push('/staff')
// //          //  setLoading(false)  
// //          }
// //          console.log('Login State Change:',auth)
// //        }
       
// //     // // console.log('Login State Change:',state.isAuthAdmin)
// //     //  if(auth.isAuthStaff){
// //     //      console.log('LOGGED IN STAFF');
// //     //   history.push('/staff')
// //     // //  }else if(auth.isAuthStudent){
// //     // //     history.push('/')
// //     // //  }else if(auth.isAuthAdmin){
// //     // //      history.push('/admin')
// //     //   }
      
// //  },[auth]);

//  //  console.log('STAFF AUTH:',auth);

//     const submitLogout = () => {
//         console.log('logout');

//        dispatch(logout())
//     }

//     //console.log('isLog:',isLog);

//     // if(loading){
//     //     return <h3>Loading...</h3>
//     // }

//     return (
//         <div class="wrapper">
//         <div className="sidebar" data-background-color="white" data-active-color="danger">


//                 <div className="sidebar-wrapper">
//                     <div className="logo">
//                         <Link to="/staff" className="simple-text">
//                             <img src='../logo192.png' alt='logo' width='100' />
//                         </Link>
//                     </div>
//                     <div className="logo">
//                         <span>Welcome</span>
//                         <h3>Staff</h3>
//                     </div>
//                 </div>
//             </div>
//             <div class="main-panel">
//             <nav className="navbar navbar-default">
//             <div className="container-fluid">
//                 <div className='row text-center'>
//                     <h3>Student Information System</h3>
//                 </div>
//                 <div className="navbar-header">
//                     <button type="button" className="navbar-toggle">
//                         <span className="sr-only">Toggle navigation</span>
//                         <span className="icon-bar bar1"></span>
//                         <span className="icon-bar bar2"></span>
//                         <span className="icon-bar bar3"></span>
//                     </button>
//                     {/* <Link className="navbar-brand" to="/">User Profile</Link> */}
//                 </div>
//                 <div className="collapse navbar-collapse">
//                     <ul className="nav navbar-nav navbar-right">
//                         <li>
//                             <Link to="/staff/login" className="dropdown-toggle" data-toggle="dropdown">
//                                 <i className="ti-download"></i>
//                                 <p> Login</p>
//                             </Link>
//                         </li>
//                         <li className="dropdown">
//                             <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
//                                     <i className="ti-bell"></i>
//                                     <p className="notification">5</p>
//                                     <p>Notifications</p>
//                                     <b className="caret"></b>
//                             </Link>
//                             {/* <ul className="dropdown-menu">
//                                  <li><Link to="#" onClick={submitLogout}>Logout</Link></li>
//                             </ul> */}
//                         </li>
//                     </ul>

//                 </div>
//             </div>
//         </nav>
//         <div className="content">
//             <ToastContainer/>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-5">
//                         <div className="card card-user">
//                             <div className="image">
//                                 <img src="../assets/img/background.jpg" alt="..."/>
//                             </div>
//                             <div className="content">
//                                 <div className="author">
//                                   <img className="avatar border-white" src="../assets/img/faces/face-2.jpg" alt="..."/>
//                                   <h4 className="title">STAFF LOGIN<br />
//                                        <p>Welcome</p>
//                                   </h4>
//                                 </div>
//                                 <form onSubmit={submitLogin}>
//                                     <div className="row">
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <input type="text" className="form-control form-control-sm border-input" name='username'  placeholder="Username" onChange={inputChange} value={account.username} />
//                                                 <span className='text-danger'>{error ? error.username : ''}</span>
//                                             </div>
//                                         </div>
//                                         </div>
//                                     <div className="row">
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <input type="password" className="form-control form-control-sm border-input" name='password'  placeholder="Password" onChange={inputChange} value={account.password} />
//                                                 <span className='text-danger'>{error ? error.password : ''}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <p className='text-danger'>{error ? error.message : ''}</p>
//                                     <div className="row">
//                                         <button type='submit' className='btn btn-primary btn-sm btn-fill btn-wd'><b> &nbsp; LOGIN &nbsp;</b></button>
//                                     </div>
//                                  </form>
//                             </div>
                         
                           
//                                 <div className="row">
//                                     <h6>Not Yet Account?</h6>
//                                     <br/>
//                                     <div>
//                                       <Link to='/register'><h6>Create Account Here!</h6></Link>  
//                                     </div>
//                                     <br/>
//                                 </div>
                            
//                         </div>
//                     </div>
//                     <div className="col-lg-8 col-md-7">
//                         <div className="card">
//                             <div className="header">
//                                 <h4 className="title">Annoucement</h4>
//                             </div>
//                             <div className="content">
//                                 <h4>Others Contents</h4>
//                             </div>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </div>
//         </div>
//         </div>
//     )
// }

// export default Login;
