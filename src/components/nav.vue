<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/play">Play</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.logo {
  height: 50px;
}

img {
  animation: imgAnimation 1.5s infinite alternate-reverse;
}
@keyframes imgAnimation {
  0% {
    transform: scaleX(0);
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
  100% {
    transform: scaleX(1);
    filter: hue-rotate(0deg);
  }
}
</style>
