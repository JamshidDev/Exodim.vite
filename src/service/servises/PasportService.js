import axios from "../index";

const get_cadryPasport = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.cadry_id}/passports`)
}

const create_cadryPasport  = (payload) => {
    return axios.post(`/api/organization/cadry/passport/${payload.cadry_id}/add`, payload.form)
}

const update_cadryPasport = (payload) => {
    return axios.post(`/api/organization/cadry/passport/${payload.passport_id}/update`, payload.form)
}

const delete_cadryPasport  = (payload) => {
    return axios.delete(`/api/organization/cadry/passport/${payload.passport_id}/delete`)
}


export default {get_cadryPasport, create_cadryPasport, update_cadryPasport, delete_cadryPasport}