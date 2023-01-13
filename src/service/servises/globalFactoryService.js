import axios from "../index";

// lodin admin request
const getOrganization = (payload)=>{
    // return axios.get(`/api/management/organizations?railway_id=${payload.railway_id}&organization_id=${payload.organization_id}&department_id=${payload.department_id}&per_page=${payload.per_page}&page=${payload.page}&last_name=${payload.last_name}&first_name=${payload.first_name}&middle_name=${payload.middle_name}&staff_id=${payload.staff_id}&sex=${payload.sex}&vacation_id=${payload.vacation_id}&education_id=${payload.education_id}&age_start=${payload.age_start}&age_end=${payload.age_end}`)
    return axios.get(`/api/management/organizations`, {params:payload},)
}


export default {getOrganization}