import axios from "../index";


const get_ViewVacanc = (payload)=>{
    return axios.get(`/api/pereview/statistics/vacancies`, {params:payload})
}

const get_ViewSverx = (payload)=>{
    return axios.get(`/api/pereview/statistics/over`, {params:payload})
}

const get_ViewRetired = (payload)=>{
    return axios.get(`/api/pereview/statistics/retireds`, {params:payload})
}



const get_ViewBirthday = (payload)=>{
    return axios.get(`/api/pereview/statistics/birthdays`, {params:payload})
}

const get_ViewNewCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/new-cadries`, {params:payload})
}

const get_ViewDeleteCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/delete-cadries`, {params:payload})
}

const get_ViewContractCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/contractors`, {params:payload})
}

const get_ViewRelativeCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/not-relative-cadries`, {params:payload})
}

const get_ViewCareerCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/not-career-cadries`, {params:payload})
}

const get_ViewVacationCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/vacations`, {params:payload})
}


const get_ViewExpireMedCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/expired-meds`, {params:payload})
}

const get_ViewNotMedCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/not-meds`, {params:payload})
}

const get_ViewBlackCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/delete-black-cadries`, {params:payload})
}

const get_ViewNotStuffCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/stafffiles`, {params:payload})
}

const get_ViewNotPassportCadry= (payload)=>{
    return axios.get(`/api/pereview/statistics/passports`, {params:payload})
}








export default {get_ViewVacanc, get_ViewBirthday, get_ViewSverx,get_ViewRetired,get_ViewNewCadry, get_ViewDeleteCadry,get_ViewContractCadry, get_ViewRelativeCadry,get_ViewCareerCadry, get_ViewVacationCadry,get_ViewExpireMedCadry, get_ViewNotMedCadry, get_ViewBlackCadry, get_ViewNotStuffCadry, get_ViewNotPassportCadry}