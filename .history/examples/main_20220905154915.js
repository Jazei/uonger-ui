import Vue from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
// import Demo from '../components/lib/demo/index'
// import '../components/css/card.scss'
// import Card from '../components/lib/card/index'
// Vue.component('Demo', Demo)
// Vue.use(Demo)
// Vue.use(Card)
// import 'uonger-ui/dist/css/index.css'
// import UUI from 'uonger-ui'
// Vue.use(UUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
