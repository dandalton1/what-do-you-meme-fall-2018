<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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

<style lang="scss" scoped>
  img {
    animation: imgAnimation 1.5s infinite alternate-reverse;
  }
  @keyframes imgAnimation {
    0% {transform: scaleX(0); }
    100% {transform: scaleX(1); }
  }
</style>
