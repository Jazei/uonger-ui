import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import Demo from '../components/lib/demo/src/index'
// Vue.component('Demo', Demo)
Vue.use(Demo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')