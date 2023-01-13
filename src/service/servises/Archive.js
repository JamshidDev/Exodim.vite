import axios from "../index";

const findCadryByJSHR = (payload)=>{
    return axios.get(`/api/organization/archive/pinfl`, {params:payload})
}

const acceptCadry = (payload)=>{
    return axios.get(`/api/organization/archive/accepted-cadry/${payload.id}`)
}

const pushCadry = (payload)=>{
    return axios.post(`/api/organization/archive/accepted-cadry/${payload.id}`, payload.data)
}

const archive_CadryList = (payload)=>{
    return axios.get(`/api/organization/archive/cadries`, {params:payload})
}






export default {findCadryByJSHR,acceptCadry,pushCadry,archive_CadryList }