import axios from "../index";

const get_punishment = (payload)=>{
    return axios.get(`/api/organization/disciplinary-acttions`,{params:payload})
}

export default {get_punishment}