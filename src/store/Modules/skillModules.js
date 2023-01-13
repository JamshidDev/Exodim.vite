

const state = {
    qualificationList:[],
    apparatList:[],
    directionList:[],
    qualification:null,
    apparat:null,
    direction:null,
    data_qual:'2022',
}

const getters = {
    get_qualificationList(state){
        return state.qualificationList;
    },
    get_apparatList(state){
        return state.apparatList;
    },
    get_directionList(state){
        return state.directionList;
    },

    get_qualification(state){
        return state.qualification;
    },
    get_apparat(state){
        return state.apparat;
    },
    get_direction(state){
        return state.direction;
    },
    get_data_qual(state){
        return state.data_qual;
    },
}


const actions = {
    set_qualificationList(ctx, payload){
        ctx.commit('update_qualificationList', payload)
    },
    set_apparatList(ctx, payload){
        ctx.commit('update_apparatList', payload)
    },
    set_directionList(ctx, payload){
        ctx.commit('update_directionList', payload)
    },
    set_qualification(ctx, payload){
        ctx.commit('update_qualification', payload)
    },
    set_apparat(ctx, payload){
        ctx.commit('update_apparat', payload)
    },
    set_direction(ctx, payload){
        ctx.commit('update_direction', payload)
    },
    set_data_qual(ctx, payload){
        ctx.commit('update_data_qual', payload)
    },
}

const mutations = {
    update_qualificationList(state, item){
        state.qualificationList = item;
    },
    update_apparatList(state, item){
        state.apparatList = item;
    },
    update_directionList(state, item){
        state.directionList = item;
    },
    update_qualification(state, item){
        state.qualification = item;
    },
    update_apparat(state, item){
        state.apparat = item;
    },
    update_direction(state, item){
        state.direction = item;
    },
    update_data_qual(state, item){
        state.data_qual = item;
    },
}

export default {state, getters, actions, mutations}