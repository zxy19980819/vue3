import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import toast from 'components/common/toastCJ/index.js'
Vue.config.productionTip = false
Vue.config.devtools=true
Vue.prototype.$bus=new Vue()
Vue.use(toast)
new Vue({
  render: h => h(App),
  router,
  store:store
}).$mount('#app')

