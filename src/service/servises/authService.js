import axios from "../index";

// lodin admin request
const loginAdmin = (payload)=>{
    return axios.post(`/api/auth/login`, payload)
}

const get_AdminDetails = (payload)=>{
    return axios.get(`/api/profile`)
}


export default {loginAdmin,get_AdminDetails}