<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="LinusVueTips" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  img {
    animation: imgAnimation 1.5s infinite alternate-reverse;
  }
  @keyframes imgAnimation {
    0% {transform: scaleX(0); filter: hue-rotate(0deg); }
    50% {filter: hue-rotate(360deg); }
    100% {transform: scaleX(1); filter: hue-rotate(0deg); }
  }
</style>
