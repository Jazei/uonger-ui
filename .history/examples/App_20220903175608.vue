<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo/>
    <Card
      imgSrc="1.jpg"
      summary="Vue3 + Typescript 从0到1开发通用基础组件"
    ></Card>
    <Card
      imgSrc="2.jpg"
      summary="玩转组件库搭建全流程 从0到1开发通用基础组件 六个案例学会响应式布局"
    >
    <template v-slot:footer>
      <div class="footer">
        <div class="level">中级 · 254人报名</div>
        <div class="price">￥ 299.00</div>
      </div>
    </template>
    </Card>
    <Card
      imgSrc="1.jpg"
      summary="Vue3 + Typescript 从0到1开发通用基础组件"
      :width="300"
      :imgheight
    >
    <template v-slot:footer>
      <div class="footer">
        <div class="level">中级 · 254人报名</div>
        <div class="level">￥ 299.00</div>
      </div>
    </template>
    </Card>
    <Card
      imgSrc="1.jpg"
      summary="Vue3 + Typescript 从0到1开发通用基础组件"
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
.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color: #999;
  margin-bottom: 8px;
}
.price{
  color: #f01414;
}
</style>
