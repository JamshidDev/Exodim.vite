import axios from "../index";


const get_CadryAcademy = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/academicStudies`,)
}

const create_CadryAcademy = (payload)=>{
    return axios.post(`/api/organization/cadry/academicStudies/${payload.id}/add`, payload.data)
}

const update_CadryAcademy = (payload)=>{
    return axios.put(`/api/organization/cadry/academicStudies/${payload.id}/update`, payload.data)
}

const delete_CadryAcademy = (payload)=>{
    return axios.delete(`/api/organization/cadry/academicStudies/${payload.id}/delete`)
}

const get_AcademyList = (payload)=>{
    return axios.get(`/api/filter/academics`,)
}


export default {get_CadryAcademy,get_AcademyList, delete_CadryAcademy,update_CadryAcademy, create_CadryAcademy}