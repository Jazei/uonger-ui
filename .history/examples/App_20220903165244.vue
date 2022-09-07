<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo/>
    <Card
      imgSrc="1.jpg"
      summary="
Vue3 + Typescript 从0到1开发通用基础组件"
    ></Card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
