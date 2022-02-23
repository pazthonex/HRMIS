import { FETCH_ALL_DEPARTMENT} from '../constant';
import * as api from '../api/department';


export const getAllDepartment = () => async(dispatch) => {

    try {
      
        const { data } = await api.getalldepartment();
         console.log('all department from Action:', data)
        if(data.status === 200){
            //console.log('sucess: ',data.data);
          dispatch({ type: FETCH_ALL_DEPARTMENT, payload: data.department })
        }
        // else if(data.status === 400){
        //    // console.log('error: ',data.errors);
        //   dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        // }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to GEt Department: ',error.response.data);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}
