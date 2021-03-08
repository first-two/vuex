import Vue from 'vue'
import VueRouter from 'vue-router'
// 一级路由
import a2 from '@/components/02.vue'
import a3 from '@/components/03.vue'
import a4 from '@/components/04.vue'
import a5 from '@/components/05.vue'

// 二级路由
import a301 from '@/components/erji/list.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',name:'a2',component:a2},
  {path:'/a2',name:'a2',component:a2},
  {path:'/a3',name:'a3',component:a3},
  {path:'/a4',name:'a4',component:a4},
  {path:'/a5',name:'a5',component:a5},
  {path:'/a301/:id',name:'a301',component:a301}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
