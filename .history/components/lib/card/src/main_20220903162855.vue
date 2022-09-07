<template>
  <div class="card">
    <img src="" alt="">
    <div></div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name:'Card',
  props:{
    imgSrc:{
      default:''
    },
    width:{
      default:''
    }
  }
}
</script>

