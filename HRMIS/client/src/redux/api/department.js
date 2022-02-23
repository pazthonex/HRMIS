import axios from './axios';
 

 //axios.defaults.baseURL = 'http://localhost:8000/api';
 axios.defaults.headers.post['Content-Type'] = 'application/json';
 axios.defaults.headers.post['Accept'] = 'application/json';

//axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;
 axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('authtoken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

//export const insert = (employeeData) => axios.post( `/employee/insert`, employeeData);
export const getalldepartment = () => axios.get(`/department`);
//export const update = (employeeData, id) => axios.post(`/employee/update/${id}`, employeeData);
//export const deletemployee = (id) => axios.delete( `/employee/delete/${id}`);




