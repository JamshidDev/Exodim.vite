

const state = {
 direction_page_search : null,
 type_page_search : null,
 med_page_search : null,
}

const getters = {
    get_direction_page_search(state){
        return state.direction_page_search;
    },
    get_type_page_search(state){
        return state.type_page_search;
    },
    get_med_page_search(state){
        return state.med_page_search;
    },
}

const actions = {
    set_direction_page_search(ctx, payload){
        ctx.commit("update_direction_page_search", payload)
    },
    set_type_page_search(ctx, payload){
        ctx.commit("update_type_page_search", payload)
    },
    set_med_page_search(ctx, payload){
        ctx.commit("update_med_page_search", payload)
    },

}

const mutations = {
    update_direction_page_search(state, item){
        state.direction_page_search = item;
    },
    update_type_page_search(state, item){
        state.type_page_search = item;
    },
    update_med_page_search(state, item){
        state.med_page_search = item;
    },

}

export default { state, actions, getters, mutations };
