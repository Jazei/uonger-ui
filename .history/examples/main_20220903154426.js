import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import Demo from '../components/lib/demo/src/main.vue'
vue.use(demo)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')