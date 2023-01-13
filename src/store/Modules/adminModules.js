const state ={
    adminPermissions: localStorage.getItem('Adminpermissions') ? localStorage.getItem('Adminpermissions') : [],
    adminRoles:[],
    adminDetails:[],
    serverError:false,


}

const getters = {
    get_adminPermissions:(state)=> (key)=>{
        return  state.adminPermissions.length>0 ? state.adminPermissions.includes(key) : null;
    },
    get_TitlePermission:(state)=>(key)=>{
        let permission = [];
        key.forEach((item)=>{
            if(state.adminPermissions.includes(item)){
                permission.push(true);
            }
        })

        return permission.includes(true)

    },
    get_adminDetails(state){
        return state.adminDetails
    },
    get_serverError(state){
        return state.serverError
    },
    
}

const actions ={
    set_adminPermissions(ctx, payload){
        ctx.commit("update_adminPermissions", payload)
    },
    set_adminDetails(ctx, payload){
        ctx.commit("update_adminDetails", payload)
    },
    set_serverError(ctx, payload){
        ctx.commit("update_serverError", payload)
    },
    
}

const mutations = {
    update_adminPermissions(state, item){
        state.adminPermissions = item
    },
    update_adminDetails(state, item){
        state.adminDetails = item
    },
    update_serverError(state, item){
        state.serverError = item
    }

}

export default { state, actions, getters, mutations}