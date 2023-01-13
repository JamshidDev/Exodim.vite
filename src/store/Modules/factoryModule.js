
const state = {
    bigFactoryList:[],
    factoryList:[],
    facDepartmentList:[],
    bigFactory:null,
    factory:null,
    factoryDepartment:null,
}

const getters ={
    get_bigFactoryList(state){
        return state.bigFactoryList
    },
    get_factoryList(state){
        return state.factoryList
    },
    get_facDepartmentList(state){
        return state.facDepartmentList
    },
    get_bigFactory(state){
        return state.bigFactory
    },
    get_factory(state){
        return state.factory
    },
    get_factoryDepartment(state){
        return state.factoryDepartment
    },
}

const actions  = {
    set_bigFactoryList(ctx, payload){
        ctx.commit('update_bigFactoryList', payload)
    },
    set_factoryList(ctx, payload){
        ctx.commit('update_factoryList', payload)
    },
    set_facDepartmentList(ctx, payload){
        ctx.commit('update_facDepartmentList', payload)
    },
    set_bigFactory(ctx, payload){
        ctx.commit('update_bigFactory', payload)
    },
    set_factory(ctx, payload){
        ctx.commit('update_factory', payload)
    },
    set_factoryDepartment(ctx, payload){
        ctx.commit('update_factoryDepartment', payload)
    },

}

const mutations ={
    update_bigFactoryList(state,item){
        state.bigFactoryList = item;
    },
    update_factoryList(state,item){
        state.factoryList = item;
    },
    update_facDepartmentList(state,item){
        state.facDepartmentList = item;
    },
    update_bigFactory(state,item){
        state.bigFactory = item;
    },
    update_factory(state,item){
        state.factory = item;
    },
    update_factoryDepartment(state,item){
        state.factoryDepartment = item;
    },
}

export default {
     state, getters, actions, mutations,
}