import axios from "../index";

const get_Incentive = (payload)=>{
    return axios.get(`/api/organization/incentives`,{params:payload})
}

export default {get_Incentive}