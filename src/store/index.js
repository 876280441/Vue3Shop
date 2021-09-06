import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCheck: false, // 购物车全选
    SumPrice: 0, // 计算购物车总价格
  },
  mutations: {
    // 点击全选与全不选
    AllCheck(state) {
      state.allCheck = state.allCheck ? true : false
    },
    // 当商品被逐个全选时购物车全选
    AllChecked(state, payload) {
      state.allCheck = payload
    },
    // 计算总价格
    SumPrice(state, newsPrice) {
      state.SumPrice += newsPrice*100
    }
  },
  actions: {
  },
  modules: {
  }
})
