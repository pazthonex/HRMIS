import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { insertEmployee } from '../../../../redux/actions/employee';
import Avatar from '@mui/material/Avatar';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

//DESIGN
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia'

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

import useStyles from './styles';

//Notification
import { toast } from 'react-toastify';
import { INSERT_EMPLOYEE } from '../../../../redux/constant';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export const Addemployee = (props) => {

   // const classes = useStyles();
   const dispatch = useDispatch();
  const states = useSelector(state => state.department)
  const [bod, setBOD] = useState('2022-02-22');

  const [department , setDepartment] = useState();
  const handleChange = (newValue) => {
    setBOD(newValue);
  };


    const [data, setData] = useState({
        firstname : '',
        middlename : '',
        lastname : '',
        dateofbirth : bod,
        placeofbirth : '',
        sex : '',
        civilstatus : '',
        citizenship : '',
        tin : '',
        gsisid : '',
        pagibigid : '',
        philhealth : '',
        sss : '',
        telephone : '',
        cellphone : '',
        emailaddress : '',
        agencynumber : '',
        isactive : false,
        employmentstatus : '',
        currentitem : '',
        department : '',
        ext : '',
        height : '',
        weight : '',
        bloodtype : '',
        rtelephone : '',
        ptelephone : '',
        rhouseno : '',
        rhousestreet : '',
        rsubdivision : '',
        phouseno : '',
        phousestreet : '',
        psubdivision : '',
        rbarangay : '',
        pbarangay : '',
        rzip : '',
        pzip : '',
        prefix : '',
        suffix : '',
        logincomputation : '',
        role : 202
    })
    const [photo,setPhoto] = useState();
    const [viewImg,setViewImg] = useState();
    const [error, setError] = useState([]);

       const { open } = props;
        const handleClose = () => {
            props.setOpen(!open);
        };

        // const Clear = async () => {
           
        //     const response = await clear();
        //     alert(response)
        //    // dispatch(clear())
        // }

    const handleImg = (e) => {
        setViewImg(URL.createObjectURL(e.target.files[0]));
        setPhoto(e.target.files[0]);
    }
  
    const handleInput = (e) => {

        setData({...data , [e.target.name] : e.target.value })
    }



   


    const hadleSubmit = async (e) => {
        e.preventDefault()

        console.log('Alldata:',data);
       
        const formData = new FormData();
        formData.append('firstname' , data.firstname)
        formData.append('middlename' , data.middlename)
        formData.append('lastname' , data.lastname)
        formData.append('dateofbirth' ,data.dateofbirth)
        formData.append('placeofbirth' ,data.placeofbirth)
        formData.append('sex' ,data.sex)
        formData.append('civilstatus' ,data.civilstatus)
        formData.append('citizenship' ,data.citizenship)

        formData.append('tin' ,data.tin  )
        formData.append('gsisid' ,data.gsisid)
        formData.append('sss' ,data.sss)
        formData.append('citizenship' ,data.citizenship)
        formData.append('pagibigid' ,data.pagibigid)
        formData.append('philhealth' ,data.philhealth)
        formData.append('telephone' ,data.telephone)
        formData.append('cellphone' ,data.cellphone)
        formData.append('emailaddress' ,data.emailaddress)
        formData.append('agencynumber' ,data.agencynumber)
        formData.append('isactive' ,data.isactive)
        formData.append('employmentstatus' ,data.employmentstatus)
        formData.append('currentitem' ,data.currentitem)
        formData.append('department' ,data.department)
        formData.append('ext' ,data.ext )
        formData.append('height' ,data.height )
        formData.append('weight' ,data.weight )
        formData.append('bloodtype' ,data.bloodtype  )
        formData.append('rtelephone' ,data.rtelephone )
        formData.append('ptelephone' ,data.ptelephone )
        
        formData.append('rhouseno' ,data.rhouseno )
        formData.append('rhousestreet' ,data.rhousestreet )
        formData.append('rsubdivision' ,data.rsubdivision )

        formData.append('phouseno' ,data.phouseno )
        formData.append('phousestreet' ,data.phousestreet  )
        formData.append('psubdivision' ,data.psubdivision  )
        formData.append('rbarangay' ,data.rbarangay  )
        formData.append('pbarangay' ,data.pbarangay   )
        formData.append('rzip' ,data.rzip)
        formData.append('pzip' ,data.pzip)
        formData.append('prefix' ,data.prefix)
        formData.append('suffix' ,data.suffix)
        formData.append('logincomputation' ,data.logincomputation)
    
        formData.append('role' ,data.role)
       // formData.append('confirmpassword' ,data.confirmpassword)
        formData.append('photo', photo); //
       // dispatch(insert(formData));

        const  response = await  insertEmployee(formData);
       
       // console.log('Response from Employee response:',response);
        if(response){
            if(response.status === 200){
                console.log('data response:',response.data);
                dispatch({ type : INSERT_EMPLOYEE , payload : response.response.data })
                toast(response.response.message);
                setError('')
                props.setOpen(false);
            //  dispatch(getStaff());
            }else if(response.status === 400){
                setError(response.errors)
            }
       }

       
       
    }
    
    useEffect(()=>{
        setDepartment(states.department)
    },[states.department]);
 
  return (
    <>   { data && 

    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
         fullWidth='md'
         maxWidth='md'
    >
        <DialogTitle><h4>New Employee</h4></DialogTitle>
        <DialogContent>
        <form onSubmit={hadleSubmit} encType="multipart/form-data">
                        <div className="row" style={{ marginTop : '10px' }}>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Firstname</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='Firstname' 
                                name='firstname' 
                                onChange={handleInput} 
                                value={data.firstname} />
                                <small className='text-danger'>{error ? error.firstname : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Middlename</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Middlename' 
                                name='middlename' 
                                onChange={handleInput} 
                                value={data.middlename} />
                                <small className='text-danger'>{error ? error.middlename : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Lastname</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Lastname' 
                                name='lastname' 
                                onChange={handleInput} 
                                value={data.lastname} />
                                <small className='text-danger'>{error ? error.lastname : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                             <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>Ext</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='suffix' 
                                name='ext' 
                                onChange={handleInput} 
                                value={data.ext} />
                                    <small className='text-danger'>{error ? error.ext : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>Suffix</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='suffix' 
                                name='suffix' 
                                onChange={handleInput} 
                                value={data.suffix} />
                                    <small className='text-danger'>{error ? error.suffix : ''}</small>
                                </div>
                            </div>
                            
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>Prefix</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                                name='prefix' 
                                onChange={handleInput} 
                                value={data.prefix} />
                                    <small className='text-danger'>{error ? error.prefix : ''}</small>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-3">
                                <div className="form-group">
                                <label>Gender</label>
                                <select className='form-control  form-control-sm border-input'  name='sex'  onChange={handleInput} value={data.sex}  >
                                    <option value="" disabled selected>Gender</option>
                                        <option value='Male' >Male</option>
                                        <option value='Female' >Female</option>
                                    </select>
                                     <small className='text-danger'>{error ? error.sex : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="form-group">
                                <label>Civil Status</label>
                                <select className='form-control  form-control-sm border-input'  name='sex'  onChange={handleInput} value={data.sex}  >
                                        <option value='Single' >Single</option>
                                        <option value='Married' >Married</option>
                                        <option value='Widow' >Widow</option>
                                    </select>
                                     <small className='text-danger'>{error ? error.sex : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                        <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Currnt Item</label>
                                <select className='form-control  form-control-sm border-input'  name='currentitem'  onChange={handleInput} value={data.currentitem}  >
                                        <option value='1' >Current Item 01</option>
                                        <option value='2' >Current Item 02</option>
                                        <option value='3' >Current Item 03</option>
                                </select>
                                <small className='text-danger'>{error ? error.currentitem : ''}</small>
                                </div>
                            </div>
                        <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Birth of Date</label>
                                <input type='date' 
                                className='form-control  form-control-sm border-input' 
                                name='dateofbirth' 
                                onChange={handleInput} 
                                value={data.dateofbirth} />
                                <small className='text-danger'>{error ? error.dateofbirth : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Place of Date</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                                name='placeofbirth' 
                                onChange={handleInput} 
                                value={data.placeofbirth} />
                                <small className='text-danger'>{error ? error.placeofbirth : ''}</small>
                                </div>
                            </div>
                           
                        </div>
                        <div className='row'>
                            <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                    <label>Citizenship</label>
                                    <select className='form-control  form-control-sm border-input'  name='citizenship'  onChange={handleInput} value={data.citizenship}  >
                                            <option value='Single' >Filipino</option>
                                            <option value='Married' >Others</option>
                                        </select>
                                        <small className='text-danger'>{error ? error.citizenship : ''}</small>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                    <label>EmploymentStatus</label>
                                    <select className='form-control  form-control-sm border-input'  name='employmentstatus'  onChange={handleInput} value={data.employmentstatus}  >
                                            <option value='Job Order' >Job Order</option>
                                            <option value='Casual' >Casual</option>
                                            <option value='Part Timer' >Part Timer</option>
                                            <option value='Permanent - Staff' >Permanent - Staff</option>
                                            <option value='Permanent - Faculty' >Permanent - Faculty</option>
                                          
                                        </select>
                                        <small className='text-danger'>{error ? error.employmentstatus : ''}</small>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <select className='form-control  form-control-sm border-input'  name='department'  onChange={handleInput} value={data.department}  >
                                                <option value="" disabled selected>Select Department</option>
                                                {
                                                    department?.map((item,idx) => {
                                                        return(
                                                            <option key={idx} value={item.id} >{item.DepartmentName}</option>   
                                                        )
                                                    })
                                                }       
                                        </select>
                                   <small className='text-danger'>{error ? error.department : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-sm-4'>
                                    <div className="form-group">
                                    <label>EmailAddress</label>
                                    <input type='text' 
                                        className='form-control  form-control-sm border-input'  
                                        name='emailaddress' 
                                        onChange={handleInput} 
                                        value={data.emailaddress} />
                                        <small className='text-danger'>{error ? error.emailaddress : ''}</small>
                                    </div>
                                </div>
                            <div className='col-md-4 col-sm-4'>
                                <div className="form-group">
                                <label>Telephone</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Telephone' 
                                name='telephone' 
                                onChange={handleInput} 
                                value={data.telephone} />
                                    <small className='text-danger'>{error ? error.telephone : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-4'>
                                <div className="form-group">
                                <label>Cellphone</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Cellphone' 
                                name='cellphone' 
                                onChange={handleInput} 
                                value={data.cellphone} />
                                <small className='text-danger'>{error ? error.cellphone : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 col-sm-5">
                            <div className="form-group">
                               <label htmlFor="upload-photo">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo"
                                        //name="upload-photo"
                                        type="file"
                                        onChange={handleImg}
                                    />
                                    <Button variant="text" component="span">
                                        <h6>Select Photo</h6>
                                    </Button>
                                    </label>
                                    <Avatar
                                    alt="img"
                                    src={viewImg}
                                    sx={{ width: 80, height: 80 }}
                                    />
                             </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <button type='button' className='btn btn-danger btn-sm btn-fill  pull-right' onClick={handleClose}><b> &nbsp; CANCEL &nbsp;</b></button>
                            {/* <button type='button' className='btn btn-danger btn-sm btn-fill  pull-right' onClick={Clear}><b> &nbsp; CLEAR &nbsp;</b></button> */}
                            <button type='submit' className='btn btn-primary btn-sm btn-fill pull-right'><b> &nbsp; SAVE  &nbsp;</b></button>

                        </div>
        </form>
        </DialogContent>
    </Dialog>
}
    </>
  )

};


export default Addemployee