<template>
  <div class="m-card" :style="width">
    div.
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
      type:Number,
      default:0
    },
    imgSrc:{
      type:String,
      default:''
    },
    imgHeigh:{
      type:Number,
      default:0
    },
    summary:{
      type:String,
      default:''
    }
  }
}
</script>

