import axios from "../index";


const get_CadryPunishment = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/punishments`)
}

const create_CadryPunishment = (payload)=>{
    return axios.post(`/api/organization/cadry/punishment/${payload.id}/add`, payload.data)
}

const update_CadryPunishment = (payload)=>{
    return axios.put(`/api/organization/cadry/punishment/${payload.id}/update`, payload.data)
}

const delete_CadryPunishment = (payload)=>{
    return axios.delete(`/api/organization/cadry/punishment/${payload.id}/delete`)
}



export default {get_CadryPunishment,create_CadryPunishment,update_CadryPunishment,delete_CadryPunishment}