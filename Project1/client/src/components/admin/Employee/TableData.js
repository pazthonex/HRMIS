import React, { useState, useEffect } from "react";
//import MaterialTable from 'material-table'
import MaterialTable from '@material-table/core'
//import MTableToolbar from '@material-table/core'
//import Chip from '@material-table/core'
// import GetAppIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { Button ,IconButton ,Menu ,MenuItem, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Paper } from '@material-ui/core';

import Axios from "axios";
import { Navigate,useNavigate } from "react-router-dom";



function Table(props) {

    console.log('Table Rendered:')

   // const [tableData, setTableData] = useState([])

    const employeesData = useSelector(state => state.employees)
    const [employee , setEmployee] = useState([])
    const [loading,setLoading] = useState(true)

    const navigate = useNavigate();

    const { esetOpen, setDopen, setId  , uopen  } = props;

    console.log('uopen:',uopen);

    const handleEdit = (id) => {
       // alert(id)
        if(id){
            setId(id)
          //  esetOpen(true)
        }
        navigate(`/admin/employee/profile/${id}`, { replace : true})
    }

    const handleDelete=(id)=>{
        //alert(id)
        if(id){
            setId(id)
            setDopen(true)
        }
      }
      useEffect(()=> {
        setEmployee(employeesData.employees);
        setLoading(false)
    },[employeesData.employees]);

    console.log('DATA Emp:',employeesData);
    const columns = [
       { title: 'Avatar', field: 'imageUrl', 
            render: rowData => 
                           {
                               return (
                                <Avatar 
                                  alt='avatar'  
                                  src={`${process.env.REACT_APP_API_URL}/${rowData.profilephoto}`} 
                                  sx={{ width: 45 , height : 45 }} 
                                  >
                                   <em style={{color:'#fff'}} > {rowData.FirstName.charAt(0)+""+rowData.LastName.charAt(0) } </em>
                                </Avatar> 
                               )
                           }  },
        { title: 'Firstname', field: 'FirstName' },
        { title: 'Lastname', field: 'LastName' },
        { title: 'Sex', field: 'Sex' },
        { title: "Email", field: "EmailAddress", filterPlaceholder: "filter" },
        { title: "Phone", field: "Telephone", align: "center" },
        { title: "Cellphone", field: "Cellphone", align: "center" , emptyValue:()=><em style={{ color: 'red'}}> </em>   },
        // { title: "Agency Number", field: "AgencyNumber", align: "center"  },
        { title: "Employment Status", field: "EmploymentStatus" },
        { title: "Department", field: "department.DepartmentName" },
      ];



  
    if(loading){
        return <h3>Loading...</h3>
    }

    return ( < >
<MaterialTable
      title="Employees Table"
      columns = { columns }
      data = { employee }
    // parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
    // parentChildData={(row, rows) => alert('hello') }
      options={{
      //  actionsColumnIndex: -1, //align button to right
        headerStyle: { color: "#000", fontWeight:600, fontSize: "15px" },
        toolbarButtonAlignment : 'left',
      //  selection: true,
       // showTitle: false,
       // exportButton: true,
       pageSize:10, 
       pageSizeOptions:[10,20,50,100],
      }}
    actions={[
            {
             tooltip: 'edit',
            // icon: 'edit',
             icon: () => (
                <EditIcon fontSize="medium"
                style={{ color: 'blue' }}
                />
              ),
             onClick: (evt, data) => handleEdit(data.id)   //navigate('/admin/employee/45', { replace: true })  // alert('id: ' + data.id)
            },
            {
            //icon: 'delete',
            icon: () => (
                <DeleteIcon fontSize="medium"
                style={{ color: 'red' }}
                />
              ),
            tooltip: 'Save User',
            onClick: (event, data) => handleDelete(data.id) //console.log(rowData)
            },
        //    {
        //     icon: 'download',
        //     tooltip: 'Upload CSV',
        //     isFreeAction: true,
           
        //     onClick: (event, row) =>  usetOpen(true) 
        //    },

      ]}
    //   components={{
    //     // Action: props => (
    //     //     <>
            
    //     //     </>
    //     //   ),
    //       Row: props => <CustomRow {...props} handleDelete={handleDelete} handleEdit={handleEdit}/>
    //     }}

      //remove border style table
    components={{
        Container: props => <Paper {...props} elevation={0}/>
   }}
    />
        </ >
    )

}


export default Table