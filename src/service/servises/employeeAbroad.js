import axios from "../index";

const get_CadryAbroad = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/abroadStudies`,)
}

const create_CadryAbroad = (payload)=>{
    return axios.post(`/api/organization/cadry/abroadStudies/${payload.id}/add`, payload.data)
}

const update_CadryAbroad = (payload)=>{
    return axios.put(`/api/organization/cadry/abroadStudies/${payload.id}/update`, payload.data)
}

const delete_CadryAbroad = (payload)=>{
    return axios.delete(`/api/organization/cadry/abroadStudies/${payload.id}/delete`,)
}


const get_AbroadList = (payload)=>{
    return axios.get(`/api/filter/abroads`,)
}



export default {get_CadryAbroad, get_AbroadList,create_CadryAbroad,update_CadryAbroad,delete_CadryAbroad}