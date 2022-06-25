const state = ()=>({
    list: [],
})

const mutations = {
    setList(state, param){
        state.list = param
    },
}

const actions = {
    fetchBannerkj(store){
        this.$axios
        .$get(
            'https://62b6116b6999cce2e8fe9455.mockapi.io/banner'
        ).then((res)=>{
            store.commit('setList', res)
        }).catch((err) => console.log('error',err))
    }
}
export {
    state,
    mutations,
    actions
}