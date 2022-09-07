<template>
  <div class="cardWrap">
    <img src="" alt="">
    <div class="summary">
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
      default:''
    },
    imgSrc:{
      type:String,
      default:''
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

