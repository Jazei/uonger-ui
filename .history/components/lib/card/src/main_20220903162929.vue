<template>
  <div class="cardWrap">
    <img src="" alt="">
    <div class="summary">
      <slot name="footer"></slot>
    </div>
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

