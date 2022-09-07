<template>
  <div class="m-card" :style="width">
    <div class="m-card-img">
      <img :src="imgSrc" alt="">
    </div>
    <div class="m-card-summary">
      {{summary}}
      <slot></slot>
    </div>
    <div class="m-card-footer">

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

