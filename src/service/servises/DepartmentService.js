import axios from "../index";

const get_Department = (payload) => {
  return axios.get(`/api/organization/departments`, { params: payload });
};

const create_Department = (payload) => {
  return axios.post(`/api/organization/add/department`, payload.data);
};

const update_Department = (payload) => {
  return axios.put(
    `/api/organization/department/${payload.id}/update`,
    payload.data
  );
};

const delete_Department = (payload) => {
  console.log(payload);
  return axios.delete(`/api/organization/department/${payload.id}/delete`);
};

const get_DepartmentCadry = (payload) => {
  return axios.get(`/api/organization/department/${payload.id}/cadries`, {params:payload.params}
     
  );
};

const get_StuffList = (payload) => {
  return axios.get(`/api/organization/staffs`, { params: payload });
};

const get_Classifikator = (payload) => {
  return axios.get(`/api/organization/classifications`, { params: payload });
};




export default {
  get_Department,
  create_Department,
  update_Department,
  delete_Department,
  get_DepartmentCadry,
  get_StuffList,
  get_Classifikator
};
