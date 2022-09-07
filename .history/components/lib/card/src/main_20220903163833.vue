<template>
  <div class="cardWrap">
    <img :src="imgSrc" alt="">
    <div class="summary">
      {{summary}}
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name:'Card',
  props:{
    width:{
      type:Number
    },
    imgSrc:{
      type:String
    },
    imgHeigh:{
      type:Number
    },
    summary:{
      type:String,
      default:''
    }
  }
}
</script>

