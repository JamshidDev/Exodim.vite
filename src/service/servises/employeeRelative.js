import axios from "../index";


const get_CadryRelative = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/relatives`)
}
const create_CadryRelative = (payload)=>{
    return axios.post(`/api/organization/cadry/relatives/${payload.id}/add`, payload.data)
}

const update_CadryRelative = (payload)=>{
    return axios.put(`/api/organization/cadry/relatives/${payload.relative_id}/update`, payload.data)
}

const delete_CadryRelative = (payload)=>{
    return axios.delete(`/api/organization/cadry/relatives/${payload.relative_id}/delete`)
}

const sortable_CadryRelative = (payload)=>{
    return axios.put(`/api/organization/cadry/relatives/sortable`, payload)
}




export default {get_CadryRelative,create_CadryRelative,update_CadryRelative,delete_CadryRelative,sortable_CadryRelative}