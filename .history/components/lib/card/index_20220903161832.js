import Card from './src/main.vue'

Card.install = function (Vue){
  Vue.component(Demo.name, Demo)
}

export default Demo