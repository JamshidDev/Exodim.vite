import axios from "../index";


const get_AddInfo = (payload)=>{
    return axios.get(`/api/organization/info/cadries`)
}

const create_Cadry = (payload)=>{
    return axios.post(`/api/organization/addworker`, payload.form)
}

const get_Stuff = (payload)=>{
    return axios.get(`/api/organization/info/department/staffs`, {params:payload})
}

const check_Cadry = (payload)=>{
    return axios.get(`/api/organization/check-pinfl`, {params:payload} )
}





export default {get_AddInfo,create_Cadry, get_Stuff, check_Cadry}