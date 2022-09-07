<template>
  <div class="cardWrap">
    <img src="" alt="">
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
      type:Number,
      default:''
    },
    summary:{
      type:String,
      default:''
    }
  }
}
</script>

