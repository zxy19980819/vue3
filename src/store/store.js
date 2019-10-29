/**
 * Created by 123 on 2019/10/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
   carlist:[]
  },
  mutations:{
   addcar(state,product){
     return new Promise((resolve,reject)=>{
       if(state.carlist.length==0){
         state.carlist.push(product)
         resolve('加入新商品')
       }else{
         let temp=0
         state.carlist.forEach(function (item,i) {
           if(item.iid==product.iid){
             temp=1
             item.count++
             resolve('当前数量加1')
           }
         })
         if(temp==0){
           state.carlist.push(product)
           resolve('加入新商品')
         }
       }
     })


   },
    allcheck(state){
     state.carlist.forEach(function (item,i) {
       item.ischeck=true
     })
      console.log(state.carlist);
    }
  },
  actions:{

  }
})

export default store
