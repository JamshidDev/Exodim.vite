import axios from "../index";


const get_LeaderCadry = (payload)=>{
    return axios.get(`/api/organization/leader/cadries`, {params:payload})
}




export default {get_LeaderCadry}