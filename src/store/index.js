import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


export default new Vuex.Store({
  state,//数据
  getters,//计算属性
  mutations,//方法
  actions,//Action 是提交mutation的，而不是直接变更状态
  // state:{
  //   str:"这是vuex的数据" ,
  //   shuzu:[
  //       "首页","新闻","收藏","我的" 
  //     ],
  //     count:1,
  //     counts:2
  // },
  // mutations: {//this.$store.commit.('方法名称','按需传递唯一的参数')
  //   increment (state,n) {
  //     // 变更状态
  //     state.counts+=n
  //   },
  //   increments (state) {
  //     state.count++
  //   }

  // },
  // getters:{//this.$store.getters.***
  //   abc(state){
  //     if(state.counts>100000){
  //       state.count=5
  //     }else{
  //       return

  //     }
  //   }
  // },
  // actions: {//store.dispatch('increment')
  //   increment (context) {
  //     context.commit('increment')
  //   }
  // },
  modules: {
  }
})
