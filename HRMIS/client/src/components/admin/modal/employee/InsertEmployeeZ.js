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
         fullWidth='lg'
         maxWidth='lg'
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

                                {/* <TextField
                                    name='firstname'
                                    onChange={handleInput}
                                    value={data.firstname}
                                    error={error && error.firstname ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Firstname"
                                // value="Phone Number"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
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
                                {/* <TextField
                                    name='middlename'
                                    onChange={handleInput}
                                    value={data.middlename}
                                    error={error && error.middlename ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Middlename"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
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

                                {/* <TextField
                                    name='lastname'
                                    onChange={handleInput}
                                    value={data.lastname}
                                    error={error && error.lastname ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Lastname"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.lastname : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                        <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Birth of Date</label>
                                <input type='date' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='BirthDate' 
                                name='dateofbirth' 
                                onChange={handleInput} 
                                value={data.dateofbirth} />
                                {/* <TextField
                                    name='dateofbirth'
                                    onChange={handleInput}
                                    value={data.dateofbirth}
                                    error={error && error.dateofbirth ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Date of Birth"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.dateofbirth : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="form-group">
                                <label>Gender</label>
                                <select className='form-control  form-control-sm border-input'  name='sex'  onChange={handleInput} value={data.sex}  >
                                    <option value="" disabled selected>Select Gender</option>
                                        <option value='Male' >Male</option>
                                        <option value='Female' >Female</option>
                                    </select>
                                {/* <TextField
                                    name='sex'
                                    onChange={handleInput}
                                    value={data.sex}
                                    error={error && error.sex ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Gender"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.sex : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="form-group">
                                <label>Civil Status</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                //    placeholder='CivilStatus' 
                                    name='civilstatus' 
                                    onChange={handleInput} 
                                    value={data.civilstatus} />
                                {/* <TextField
                                    name='civilstatus'
                                    onChange={handleInput}
                                    value={data.civilstatus}
                                    error={error && error.civilstatus ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Civil Status"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.civilstatus : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="form-group">
                                <label>Citizenship</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Citizenship' 
                                name='citizenship' 
                                onChange={handleInput} 
                                value={data.citizenship} />
                                {/* <TextField
                                    name='citizenship'
                                    onChange={handleInput}
                                    value={data.citizenship}
                                    error={error && error.citizenship ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Citizenship"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.citizenship : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                <label>Place Of Birth</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                  //  placeholder='PlaceofBirth' 
                                    name='placeofbirth' 
                                    onChange={handleInput} 
                                    value={data.placeofbirth} />
                                    {/* <TextField
                                     name='placeofbirth'
                                     onChange={handleInput}
                                     value={data.placeofbirth}
                                     error={error && error.placeofbirth ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Place Of Birth"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.placeofbirth : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>TIN</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                 //   placeholder='Tin' 
                                    name='tin' 
                                    onChange={handleInput} 
                                    value={data.tin} />
                                {/* <TextField
                                    name='tin'
                                    onChange={handleInput}
                                    value={data.tin}
                                    error={error && error.tin ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="TIN"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.tin : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>GSIS ID</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='GSIS' 
                                name='gsisid' 
                                onChange={handleInput} 
                                value={data.gsisid} />
                                {/* <TextField
                                    name='gsisid'
                                    onChange={handleInput}
                                    value={data.gsisid}
                                    error={error && error.gsisid ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="GSISID"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.gsisid : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>Pag-Ibig ID</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Pag-Ibig ID' 
                                name='pagibigid' 
                                onChange={handleInput} 
                                value={data.pagibigid} />
                                {/* <TextField
                                    name='pagibigid'
                                    onChange={handleInput}
                                    value={data.pagibigid}
                                    error={error && error.pagibigid ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Pag-ibig ID"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.pagibigid : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>Philhealth</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='Philhealth' 
                                name='philhealth' 
                                onChange={handleInput} 
                                value={data.philhealth} />
                                {/* <TextField
                                    name='philhealth'
                                    onChange={handleInput}
                                    value={data.philhealth}
                                    error={error && error.philhealth ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Philhealth"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.philhealth : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-sm-2">
                                <div className="form-group">
                                <label>SSS</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                  //  placeholder='SSS' 
                                    name='sss' 
                                    onChange={handleInput} 
                                    value={data.sss} />
                                    {/* <TextField
                                     name='sss'
                                     onChange={handleInput}
                                     value={data.sss}
                                     error={error && error.sss ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="SSS"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.sss : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>Telephone</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Telephone' 
                                name='telephone' 
                                onChange={handleInput} 
                                value={data.telephone} />
                                {/* <TextField
                                    name='telephone'
                                    onChange={handleInput}
                                    value={data.telephone}
                                    error={error && error.telephone ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Telephone"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.telephone : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>Cellphone</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Cellphone' 
                                name='cellphone' 
                                onChange={handleInput} 
                                value={data.cellphone} />
                                {/* <TextField
                                    name='cellphone'
                                    onChange={handleInput}
                                    value={data.cellphone}
                                    error={error && error.cellphone ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Cellphone"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.cellphone : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>EmailAddress</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                //    placeholder='EmailAddress' 
                                    name='emailaddress' 
                                    onChange={handleInput} 
                                    value={data.emailaddress} />
                                {/* <TextField
                                    name='emailaddress'
                                    onChange={handleInput}
                                    value={data.emailaddress}
                                    error={error && error.emailaddress ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Email Address"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.emailaddress : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>Agency Number</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                  //  placeholder='Agency Number' 
                                    name='agencynumber' 
                                    onChange={handleInput} 
                                    value={data.agencynumber} />
                                {/* <TextField
                                    name='agencynumber'
                                    onChange={handleInput}
                                    value={data.agencynumber}
                                    error={error && error.agencynumber ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Agency Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.agencynumber : ''}</small>
                                </div>
                            </div>
                          
                            <div className='col-md-2 col-sm-2'>
                                <div className="form-group">
                                <label>Employment Status</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                   // placeholder='EmploymentStatus' 
                                    name='employmentstatus' 
                                    onChange={handleInput} 
                                    value={data.employmentstatus} />
                                {/* <TextField
                                    name='employmentstatus'
                                    onChange={handleInput}
                                    value={data.employmentstatus}
                                    error={error && error.employmentstatus ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Employent Status"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.employmentstatus : ''}</small>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-2 col-sm-2">
                                <div className="form-group">
                                <label>Current Item</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                //    placeholder='Current Item' 
                                    name='currentitem' 
                                    onChange={handleInput} 
                                    value={data.currentitem} />
                                    {/* <TextField
                                     name='currentitem'
                                     onChange={handleInput}
                                     value={data.currentitem}
                                     error={error && error.currentitem ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Current Item"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.currentitem : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
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
                              {/* <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Department' 
                                name='department' 
                                onChange={handleInput} 
                                value={data.department} /> */}
                                 {/* <TextField
                                  name='department'
                                  onChange={handleInput}
                                  value={data.department}
                                    type='text'
                                    error={error && error.department ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Department"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.department : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>EXT</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='EXT' 
                                name='ext' 
                                onChange={handleInput} 
                                value={data.ext} />
                                 {/* <TextField
                                  name='ext'
                                  onChange={handleInput}
                                  value={data.ext}
                                    type='text'
                                    error={error && error.ext ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Ext"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.ext : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>Height</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Height' 
                                name='height' 
                                onChange={handleInput} 
                                value={data.height} />
                                 {/* <TextField
                                  name='height'
                                  onChange={handleInput}
                                  value={data.height}
                                    type='text'
                                    error={error && error.height ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Height"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.height : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>Weight</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='Weight' 
                                name='weight' 
                                onChange={handleInput} 
                                value={data.weight} />
                                 {/* <TextField
                                  name='weight'
                                  onChange={handleInput}
                                  value={data.weight}
                                    type='text'
                                    error={error && error.weight ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Weight"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.weight : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>BloodType</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='Bloodtype' 
                                name='bloodtype' 
                                onChange={handleInput} 
                                value={data.bloodtype} />
                                 {/* <TextField
                                  name='bloodtype'
                                  onChange={handleInput}
                                  value={data.bloodtype}
                                    type='text'
                                    error={error && error.bloodtype ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="BloodType"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.bloodtype : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-sm-2">
                                <div className="form-group">
                                <label>RTelephone</label>
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='RTelephone' 
                                name='rtelephone' 
                                onChange={handleInput} 
                                value={data.rtelephone} />
                                    {/* <TextField
                                     name='rtelephone'
                                     onChange={handleInput}
                                     value={data.rtelephone}
                                     error={error && error.rtelephone ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="RTelephone"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.rtelephone : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>RHouse No</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='RHouse No' 
                                name='rhouseno' 
                                onChange={handleInput} 
                                value={data.rhouseno} />
                                 {/* <TextField
                                  name='rhouseno'
                                  onChange={handleInput}
                                  value={data.rhouseno}
                                    type='text'
                                    error={error && error.rhouseno ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Rhouse No"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.rhouseno : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>RHouse Street</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                             //   placeholder='RHouse Street' 
                                name='rhousestreet' 
                                onChange={handleInput} 
                                value={data.rhousestreet} />
                                 {/* <TextField
                                  name='rhousestreet'
                                  onChange={handleInput}
                                  value={data.rhousestreet}
                                    type='text'
                                    error={error && error.rhousestreet ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="RHouseStreet"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.rhousestreet : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>RSubdivision</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='RSubdivision' 
                                name='rsubdivision' 
                                onChange={handleInput} 
                                value={data.rsubdivision} />
                                 {/* <TextField
                                  name='rsubdivision'
                                  onChange={handleInput}
                                  value={data.rsubdivision}
                                    type='text'
                                    error={error && error.rsubdivision ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="RSubDivision"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.rsubdivision : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>PHouseno</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='PHouseno' 
                                name='phouseno' 
                                onChange={handleInput} 
                                value={data.phouseno} />
                                 {/* <TextField
                                  name='phouseno'
                                  onChange={handleInput}
                                  value={data.phouseno}
                                    type='text'
                                    error={error && error.phouseno ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="PHouse No."
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.phouseno : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                                <label>PHouse Street</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='PHousestreet' 
                                name='phousestreet' 
                                onChange={handleInput} 
                                value={data.phousestreet} />
                                 {/* <TextField
                                  name='phousestreet'
                                  onChange={handleInput}
                                  value={data.phousestreet}
                                    type='text'
                                    error={error && error.phousestreet ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="PHouseStreet"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.phousestreet : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-sm-2">
                                <div className="form-group">
                                <label>PSub Division</label>
                                <input type='text' 
                                    className='form-control  form-control-sm border-input' 
                                //    placeholder='PSubdivision' 
                                    name='psubdivision' 
                                    onChange={handleInput} 
                                    value={data.psubdivision} />
                                    {/* <TextField
                                     name='psubdivision'
                                     onChange={handleInput}
                                     value={data.psubdivision}
                                     error={error && error.psubdivision ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="PSubDivision"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.psubdivision : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>PBarangay</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                             //   placeholder='PBarangay' 
                                name='pbarangay' 
                                onChange={handleInput} 
                                value={data.pbarangay} />
                                 {/* <TextField
                                  name='pbarangay'
                                  onChange={handleInput}
                                  value={data.pbarangay}
                                    type='text'
                                    error={error && error.pbarangay ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="PBarangay"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.pbarangay : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                             <label>RZIP</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='RZIP' 
                                name='rzip' 
                                onChange={handleInput} 
                                value={data.rzip} />
                                 {/* <TextField
                                  name='rzip'
                                  onChange={handleInput}
                                  value={data.rzip}
                                    type='text'
                                    error={error && error.rzip ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="RZip"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.rzip : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>PZIP</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                              //  placeholder='PZIP' 
                                name='pzip' 
                                onChange={handleInput} 
                                value={data.pzip} />
                                 {/* <TextField
                                  name='pzip'
                                  onChange={handleInput}
                                  value={data.pzip}
                                    type='text'
                                    error={error && error.pzip ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="PZip"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.pzip : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>Prefix</label>
                              <input type='text' 
                                className='form-control  form-control-sm border-input' 
                             //   placeholder='Prefix' 
                                name='prefix' 
                                onChange={handleInput} 
                                value={data.prefix} />
                                 {/* <TextField
                                  name='prefix'
                                  onChange={handleInput}
                                  value={data.prefix}
                                    type='text'
                                    error={error && error.prefix ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Prefix"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.prefix : ''}</small>
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
                                 {/* <TextField
                                  name='suffix'
                                  onChange={handleInput}
                                  value={data.suffix}
                                    type='text'
                                    error={error && error.suffix ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Suffix"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.suffix : ''}</small>
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
                            <div className="col-md-2 col-sm-2">
                                <div className="form-group">
                                <label>Ptelephone</label> 
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                                //placeholder='ptelephone' 
                                name='ptelephone' 
                                onChange={handleInput} 
                                value={data.ptelephone} />
                                    {/* <TextField
                                     name='ptelephone'
                                     onChange={handleInput}
                                     value={data.ptelephone}
                                     error={error && error.ptelephone ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="PTelephone"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.ptelephone : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="form-group">
                                <label>RBarangay</label> 
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='rbarangay' 
                                name='rbarangay' 
                                onChange={handleInput} 
                                value={data.rbarangay} />
                                    {/* <TextField
                                     name='rbarangay'
                                     onChange={handleInput}
                                     value={data.rbarangay}
                                     error={error && error.rbarangay ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="RBarangay"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                     <small className='text-danger'>{error ? error.rbarangay : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-1 col-sm-1'>
                                <div className="form-group">
                                <div class="form-check">
                               
                                <input class="form-check-input" 
                                    type="checkbox"
                                    //id="topping"
                                   // name="topping"
                                  //  value="Paneer"
                                    checked={data.isactive}
                                    onChange={ ()=> setData( {...data, isactive : !data.isactive } )}
                                />
                                    <label class="form-check-label" for="defaultCheck1">
                                        <small> Active</small>
                                    </label>
                                </div>
                                {/* <TextField
                                    name='isactive'
                                    onChange={handleInput}
                                    value={data.isactive}
                                    error={error && error.isactive ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Active"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.isactive : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="form-group">
                              <label>Login Computation</label> 
                                <input type='text' 
                                className='form-control  form-control-sm border-input' 
                               // placeholder='logincomputation' 
                                name='logincomputation' 
                                onChange={handleInput} 
                                value={data.logincomputation} />
                                 {/* <TextField
                                  name='logincomputation'
                                  onChange={handleInput}
                                  value={data.logincomputation}
                                    type='text'
                                    error={error && error.logincomputation ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="LoginCom."
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.logincomputation : ''}</small>
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
        {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
    </Dialog>
}
    </>
  )

};


export default Addemployee