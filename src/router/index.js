/**
 * Created by 123 on 2019/10/15.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const home=()=>import('../views/home.vue')
const shopcar=()=>import('../views/shopcar/shopcar.vue')
const detail=()=>import('../views/detail/detail.vue')
Vue.use(VueRouter)
const router=new VueRouter({
routes:[{
  path:'/',
  redirect:'/home'

},{
  path:'/home',
  component:home
},{
  path:'/detail/:iid',
  component:detail
},,{
  path:'/shopcar',
  component:shopcar
}],
  mode:'history',
  linkActiveClass:'routerlink'

})

export default router
