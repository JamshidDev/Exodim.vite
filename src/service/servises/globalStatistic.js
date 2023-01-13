import axios from "../index";

// lodin admin request
const get_globalStatistic = (payload)=>{
    return axios.get(`/api/management/statistics`, {params:payload},)
}


export default {get_globalStatistic}