import axios from "../index";


const get_CadryMed = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/meds`)
}
const update_CadryMed = (payload)=>{
    return axios.put(`/api/organization/cadry/meds/${payload.id}/update`, payload.data)
}


const delete_CadryMed = (payload)=>{
    return axios.delete(`/api/organization/cadry/meds/${payload.id}/delete`)
}

export default {get_CadryMed,delete_CadryMed,update_CadryMed}