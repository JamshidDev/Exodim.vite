import axios from "../index";


const get_CadryIncentive = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/incentives`)
}

const create_CadryIncentive = (payload)=>{
    return axios.post(`/api/organization/cadry/incentives/${payload.id}/add`, payload.data)
}

const update_CadryIncentive = (payload)=>{
    return axios.put(`/api/organization/cadry/incentives/${payload.id}/update`, payload.data)
}

const delete_CadryIncentive = (payload)=>{
    return axios.delete(`/api/organization/cadry/incentives/${payload.id}/delete`)
}



export default {get_CadryIncentive,create_CadryIncentive,update_CadryIncentive,delete_CadryIncentive}