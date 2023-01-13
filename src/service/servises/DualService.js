import axios from "../index";

// Technical
const get_Technical = (payload)=>{
    return axios.get(`/api/dual/technicals`, {params:payload})
}

const create_Technical = (payload)=>{
    return axios.post(`/api/dual/technical/create`, payload.data)
}

const update_Technical = (payload)=>{
    return axios.put(`/api/dual/technical/${payload.technical_id}/update`, payload.data)
}

const delete_Technical = (payload)=>{
    return axios.delete(`/api/dual/technical/${payload.technical_id}/delete`)
}


// Professions
const get_Professions = (payload)=>{
    return axios.get(`/api/dual/professions`, {params:payload})
}

const create_Professions = (payload)=>{
    return axios.post(`/api/dual/profession/create`, payload.data)
}

const update_Professions = (payload)=>{
    return axios.put(`/api/dual/profession/${payload.profession_id}/update`, payload.data)
}

const delete_Professions = (payload)=>{
    return axios.delete(`/api/dual/profession/${payload.profession_id}/delete`)
}



// Specialties
const get_Specialties = (payload)=>{
    return axios.get(`/api/dual/specialties`, {params:payload})
}

const create_Specialties = (payload)=>{
    return axios.post(`/api/dual/specialty/create`, payload.data)
}

const update_Specialties = (payload)=>{
    return axios.put(`/api/dual/specialty/${payload.specialty_id}/update`, payload.data)
}

const delete_Specialties = (payload)=>{
    return axios.delete(`/api/dual/specialty/${payload.specialty_id}/delete`)
}

// Cadry
const get_Duals = (payload)=>{
    return axios.get(`/api/dual/${payload.cadry_id}/duals`, {params:payload})
}
const create_Duals = (payload)=>{
    return axios.post(`/api/dual/${payload.cadry_id}/add-dual`, payload.data)
}
const update_Duals  = (payload)=>{
    return axios.put(`/api/dual/${payload.dual_id}/update-dual`, payload.data)
}

const delete_Duals  = (payload)=>{
    return axios.delete(`/api/dual/${payload.dual_id}/delete-dual`)
}








export default {get_Technical, create_Technical, update_Technical,delete_Technical,get_Professions, create_Professions, update_Professions, delete_Professions, get_Specialties, create_Specialties, update_Specialties, delete_Specialties, get_Duals, create_Duals, update_Duals,delete_Duals }