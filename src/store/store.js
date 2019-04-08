import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);
const state = {
    goods:[],
}
const mutations = {
    add(state,a){
        let abb = JSON.parse(sessionStorage.getItem('name'));
        if(abb){
            state.goods = abb;
        };
        if(state.goods.length){
            for (let i = 0; i < state.goods.length; i++) {
                if(a.a.bid == state.goods[i].bid){
                    state.goods[i].num += a.a.num;
                    sessionStorage.setItem("name",JSON.stringify(state.goods));
                    return;
                }
            }
            state.goods.push(a.a);
        }else{
            state.goods.push(a.a);
        }
        sessionStorage.setItem("name",JSON.stringify(state.goods));
    },
    adds(state,a){
        state.goods = a.a;
        sessionStorage.setItem("name",JSON.stringify(state.goods));
    },
}
export default new Vuex.Store({
    state,
    mutations,
})
