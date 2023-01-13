
const state = {
    new_cadry_date1:null,
    new_cadry_date2:null,

}

const getters = {
    get_new_cadry_date(state){
        return {
            date1:state.new_cadry_date1,
            date2:state.new_cadry_date2,

        }
    },
}

const actions ={
    set_new_cadry_date(ctx, payload){
        ctx.commit('update_new_cadry_date',payload)
    },

}

const mutations = {
    update_new_cadry_date(state, item){
        state.new_cadry_date1 = item.date1;
        state.new_cadry_date2 = item.date2;

    },
}


export default { state, actions, getters, mutations };