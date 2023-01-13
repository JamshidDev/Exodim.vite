const state = {
  bigOrganization: [],
  organization: [],
  department: [],
  bigOrgValue: null,
  orgValue: null,
  depValue: null,
  statistic:null,
};

const getters = {
  get_bigOrganizationList(state) {
    return state.bigOrganization;
  },
  get_OrganizationList(state) {
    return state.organization;
  },
  get_DepartmentList(state) {
    return state.department;
  },
  get_bigOrgValue(state) {
    return state.bigOrgValue;
  },
  get_orgValue(state) {
    return state.orgValue;
  },
  get_depValue(state) {
    return state.depValue;
  },
  get_statistic(state) {
    return state.statistic;
  },
};

const actions = {
  set_bigOrganization(ctx, payload) {
    ctx.commit("update_bigOrganization", payload);
  },
  set_organization(ctx, payload) {
    ctx.commit("update_organization", payload);
  },
  set_department(ctx, payload) {
    ctx.commit("update_department", payload);
  },
  set_bigOrgValue(ctx, payload) {
    ctx.commit("update_bigOrgValue", payload);
  },
  set_orgValue(ctx, payload) {
    ctx.commit("update_orgValue", payload);
  },
  set_depValue(ctx, payload) {
    ctx.commit("update_depValue", payload);
  },
  set_statistic(ctx, payload) {
    ctx.commit("update_statistic", payload);
  },
};

const mutations = {
  update_bigOrganization(state, item) {
    state.bigOrganization = item;
  },
  update_organization(state, item) {
    state.organization = item;
  },
  update_department(state, item) {
    state.department = item;
  },
  update_bigOrgValue(state, item) {
    state.bigOrgValue = item;
  },
  update_orgValue(state, item) {
    state.orgValue = item;
  },
  update_depValue(state, item) {
    state.depValue = item;
  },
  update_statistic(state, item) {
    state.statistic = item;
  },
};

export default { state, actions, getters, mutations };
