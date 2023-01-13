import axios from "../index";


const get_Qualification = (payload)=>{
    return axios.get(`/api/qualification/apparats`, {params:payload})
}

const search_Cadry = (payload)=>{
    return axios.get(`/api/organization/search/cadries`, {params:payload})
}

const get_Cadry_Qualification = (payload)=>{
    return axios.get(`/api/qualification/cadry/${payload.id}`)
}

const create_Qualification = (payload)=>{
    return axios.post(`/api/qualification/cadry/${payload.id}/add`, payload.data)
}

const update_Qualification = (payload)=>{
    return axios.put(`/api/qualification/${payload.id}/update`, payload.data)
}

const delete_Cadry_Qualification = (payload)=>{
    return axios.delete(`/api/qualification/${payload.id}/delete`)
}


// Skill Types
const get_Skill_Apparats = (payload)=>{
    return axios.get(`/api/qualification/management/apparats`,{params:payload.params})
}

const create_Skill_Apparats = (payload)=>{
    return axios.post(`/api/qualification/management/apparat/add`, payload.data)
}

const update_Skill_Apparats = (payload)=>{
    return axios.put(`/api/qualification/management/apparat/${payload.apparat_id}/update`, payload.data)
}

const delete_Skill_Apparats = (payload)=>{
    return axios.delete(`/api/qualification/management/apparat/${payload.apparat_id}/delete`)
}


// Skill Directions
const get_Skill_Direction = (payload)=>{
    return axios.get(`/api/qualification/management/directions`,{params:payload.params})
}

const create_Skill_Direction = (payload)=>{
    return axios.post(`/api/qualification/management/direction/add`, payload.data)
}

const update_Skill_Direction = (payload)=>{
    return axios.put(`/api/qualification/management/direction/${payload.direction_id}/update`, payload.data)
}


const delete_Skill_Direction = (payload)=>{
    return axios.delete(`/api/qualification/management/direction/${payload.direction_id}/delete`)
}


// Skill Statistic
const get_Skill_Statistic = (payload)=>{
    return axios.get(`/api/qualification/management/upgrades`,{params:payload})
}

const get_Skill_Organization = (payload)=>{
    return axios.get(`/api/qualification/management/organization/${payload.id}/upgrades`,{params:payload.params})
}

const get_Skill_Export = (payload)=>{
    return axios.get(`/api/qualification/management/upgrades/export`,{params:payload})
}

const get_Skill_Preview = (payload)=>{
    return axios.get(`/api/qualification/management/organization/${payload.organization_id}`,{params:payload.data})
}



export default {get_Qualification,search_Cadry, create_Qualification, get_Cadry_Qualification, update_Qualification, delete_Cadry_Qualification, get_Skill_Apparats,update_Skill_Apparats,delete_Skill_Apparats,create_Skill_Apparats,get_Skill_Direction, create_Skill_Direction,update_Skill_Direction,delete_Skill_Direction, get_Skill_Statistic,get_Skill_Export,get_Skill_Organization,get_Skill_Preview }