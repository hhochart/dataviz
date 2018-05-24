<template>
  <div id="app">
    <transition name="fade-slide" appear mode="out-in">
      <router-view class="router"/>
    </transition>
  </div>

</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "scss/main";
</style>
