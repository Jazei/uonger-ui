import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import Demo from '../components/lib/demo/src/main.vue'
Vue.component('demo', [definition])
Vue.use(demo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')