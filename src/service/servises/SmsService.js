import axios from "../index";

const send_SMS = (payload)=>{
    return axios.post(`/api/admin/management/sms/${payload.cadry_id}/send`, payload.data)
}

export default{send_SMS}