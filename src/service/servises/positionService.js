import axios from "../index";

const get_Positions = (payload)=>{
    return axios.get(`/api/organization/staff/positions`,{params:payload})
}

const create_Positions = (payload)=>{
    return axios.post(`/api/organization/staff/add`,payload.data)
}

const update_Positions = (payload)=>{
    return axios.put(`/api/organization/staff/${payload.id}/update`,payload.data)
}

const delete_Positions = (payload)=>{
    return axios.delete(`/api/organization/staff/${payload.id}/delete`)
}

const get_postionCategory =()=>{
    return axios.get(`/api/organization/staff/categories`)
}


export default {get_Positions,create_Positions, update_Positions, delete_Positions,get_postionCategory}

