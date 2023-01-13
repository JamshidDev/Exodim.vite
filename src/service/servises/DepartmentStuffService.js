import axios from "../index";


const get_DepartmentStuff = (payload)=>{
    return axios.get(`/api/organization/department/${payload.id}/staffs`, {params: payload.params})
}

const create_DepartmentStuff = (payload)=>{
    return axios.post(`/api/organization/departmentStaff/${payload.id}/create`,payload.data)
}

const update_DepartmentStuff = (payload)=>{
    return axios.put(`/api/organization/departmentStaff/${payload.id}/update`,payload.data)
}

const delete_DepartmentStuff = (payload)=>{
    console.log(payload);
    return axios.delete(`/api/organization/departmentStaff/${payload.id}/delete`)
}

const search_klassificator = (payload)=>{
    return axios.get(`/api/organization/classifications`, {params:payload})
}

const get_StuffCadry = (payload)=>{
    return axios.get(`/api/organization/departmentStaffCadries/${payload.id}`, {params: payload.params})
}






export default {get_DepartmentStuff ,create_DepartmentStuff ,update_DepartmentStuff, delete_DepartmentStuff, search_klassificator,get_StuffCadry}