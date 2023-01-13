import axios from "../index";


const get_CadryStuff = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/stafffiles`)
}

const create_CadryStuff = (payload)=>{
    return axios.post(`/api/organization/cadry/stafffiles/${payload.id}/add`, payload.form)
}

const update_CadryStuff = (payload)=>{
    return axios.post(`/api/organization/cadry/stafffiles/${payload.id}/update`, payload.form)
}

const delete_CadryStuff = (payload)=>{
    return axios.delete(`/api/organization/cadry/stafffiles/${payload.id}/delete`)
}

export default {get_CadryStuff,create_CadryStuff, update_CadryStuff,delete_CadryStuff}