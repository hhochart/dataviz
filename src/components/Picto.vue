<template>
  <figure class="img-container" :style="style">
    <img :src="src" alt="" ref="img">
    <figcaption class="name">{{ name }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'Picto',
  props: ['src', 'name'],
  data () {
    return {
      style: {}
    }
  },
  mounted () {
    this.$refs.img.onload = (e) => {
      this.w = this.$refs.img.naturalWidth
      this.h = this.$refs.img.naturalHeight
      if (this.$refs.img.naturalHeight > this.$refs.img.naturalWidth) {
        this.w = this.$refs.img.naturalHeight
      } else if (this.$refs.img.naturalWidth > this.$refs.img.naturalHeight) {
        this.h = this.$refs.img.naturalWidth
      }
      this.style = {
        width: `${this.w}px`,
        height: `${this.h}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.img-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .name {
    position: absolute;
    bottom: -65px;
    opacity: 0;
    padding-top: 10px;
    text-align: center;
    color: $grisfonce;
    transition: 0.3s ease-in-out;
  }
  &::after {
    transition: all ease-in-out 0.3s;
    background-color: $grisclair;
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    border-radius: 100%;
    z-index: -1;
  }
}
</style>
