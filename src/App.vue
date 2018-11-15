<template>
  <div id="app" class="container">
    <div class="display-3">
      What do u meme
    </div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "global.scss";
</style>
