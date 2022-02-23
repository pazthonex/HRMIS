import { FETCH_ALL_EMPLOYEE } from '../constant';
import * as api from '../api/employee';




// export const insert = (staff) => async(dispatch) => {

//     try {
//         console.log(staff);
//         const { data } = await api.insert(staff);
//         //console.log('all Users:', users)
//          console.log('Response Staff:', data)
//         if(data.status === 200){
//             //console.log('sucess: ',data.data);
//            dispatch({ type: ADDSTAFF, payload: data.message })
//         }else if(data.status === 400){
//            // console.log('error: ',data.errors);
//            dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
//         }
//        // dispatch({ type: INSERT, payload: data })

//     } catch (error) {
//         console.log('error to Insert Staff: ',error.response);
//        // dispatch({ type: ERR, payload: error.response.data })
//     }
// }

export const getAllEmployee = () => async(dispatch) => {

    try {
      
        const { data } = await api.getallemployee();
         console.log('all Employee from Action:', data)
        if(data.status === 200){
            //console.log('sucess: ',data.data);
          dispatch({ type: FETCH_ALL_EMPLOYEE, payload: data.employees })
        }
        // else if(data.status === 400){
        //    // console.log('error: ',data.errors);
        //   dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        // }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to GEt Employee: ',error.response.data);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}


export const insertEmployee = async(employees) => {

    try {
        const { data } = await api.insert(employees);

        return data;
        //console.log('all Users:', users)
        // console.log('Response Staff:', data)
        // if(data.status === 200){
        //     //console.log('sucess: ',data.data);
        //    //dispatch({ type: ADDSTAFF, payload: data.message })
        // }else if(data.status === 400){
        //    // console.log('error: ',data.errors);
        //   // dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        // }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to Insert Employees from action: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}
export const updateEmployee = async(employees , id) => {
    try {
        const { data } = await api.update(employees, id);
         return data;
    } catch (error) {
        console.log('error to Upadte Employess from Action: ',error.response);
    }
}
export const deleteEmployee = async(id) => {

    try {
        const { data } = await api.deletemployee(id);
         return data;
    } catch (error) {
        console.log('error to Delete Staff: ',error.response);
    }
}

 //export const clear = () => async() => {
// export const clear = async() => {

//     console.log('clear:');
//     const res = 'suceess clear'
//     return res;
//     // dispatch({ type: CLEAR })

// }


// export const logout = () => async(dispatch) => {

//     try {
//         console.log('logut niii');
//         const { data } = await api.logout();
//         //console.log('all Users:', users)
//         console.log('Response Logout:', data)
//         if(data.status === 200){
//             console.log('sucess logout: ',data.data);
//             dispatch({ type: LOGOUT, payload: data.data })
//         }else{
//             console.log('error to logout ');
//           //  dispatch({ type: ERROR, payload: data.errors })
//         }
//        // dispatch({ type: INSERT, payload: data })

//     } catch (error) {
//         console.log('error to logout',error);
//        // dispatch({ type: ERR, payload: error.response.data })
//     }

// }