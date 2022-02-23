import {FETCH_ALL_EMPLOYEE, INSERT_EMPLOYEE ,UPDATE_EMPLOYEE,DELETE_EMPLOYEE} from '../constant'

const initState = {
    employees: [],
    errors: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        
        case FETCH_ALL_EMPLOYEE:
            return {
               // items: [...users.items, action.payload],
               employees: action.payload,
                errors: [],
            }
        case INSERT_EMPLOYEE:
            return {
                employees: [ action.payload, ...state.employees],
                errors: [],
            }
        case UPDATE_EMPLOYEE:
            return {
                employees: state?.employees?.map((item) => (item.id === action.payload.id ? action.payload : item)),
                errors: [],
            }
      case DELETE_EMPLOYEE:
                return{
                    employees: state?.employees?.filter((item) => item.id !== action.id),
                    errors: [],
                }
        default:
            return state;

    }
}