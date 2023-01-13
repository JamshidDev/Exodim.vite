import axios from "../index";


const get_CadryCareers = (payload)=>{
    return axios.get(`/api/organization/cadry/${payload.id}/careers`)
}

const create_CadryCareers = (payload)=>{
    return axios.post(`/api/organization/cadry/career/${payload.id}/add`, payload.data)
}

const update_CadryCareers = (payload)=>{
    return axios.put(`/api/organization/cadry/career/${payload.id}/update`, payload.data)
}

const delete_CadryCareers = (payload)=>{
    return axios.delete(`/api/organization/cadry/career/${payload.id}/delete`)
}

const sortable_CadryCareers = (payload)=>{
    return axios.put(`/api/organization/cadry/career/sortable`,payload)
}




export default {get_CadryCareers,create_CadryCareers, update_CadryCareers, delete_CadryCareers,sortable_CadryCareers}