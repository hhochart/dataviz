<template>
  <div id="app">
    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>
  </div>

</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  margin: 0;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter {
  opacity: 0;
  transform: translate3d(-5%, 0, 0);
}

.fade-leave-to {
  opacity: 0;
  transform: translate3d(5%, 0, 0);
}
</style>
