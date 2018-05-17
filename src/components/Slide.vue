<template>
  <div class="hello">
    <h1>{{ currentSlide.title }}</h1>
    <h2>{{ currentSlide.subtitle }}</h2>
    Filtrer le nombre d'occurence dans le tableau de resultat <br>
    stockage des choix en localstorage
    <br>

    <button @click="nextSlide" v-if="canNext">Suivant</button>
    <br>
    <button @click="prevSlide" v-if="canPrev">Precedant</button>
  </div>
</template>

<script>
import Slides from './Slides'

export default {
  name: 'Slide',
  data () {
    return {
      currentSlide: Slides.state[parseInt(this.$route.params.id)],
      canNext: true,
      canPrev: true
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.checkRoute(to.params.id)
    this.currentSlide = Slides.state[parseInt(to.params.id)]
    next()
  },
  created () {
    console.log('created function called')
    this.checkRoute(this.$route.params.id)
  },
  methods: {
    nextSlide () {
      let next = parseInt(this.$route.params.id) + 1
      this.$router.push({name: 'Slide', params: {id: next}})
    },
    prevSlide () {
      let prev = parseInt(this.$route.params.id) - 1
      this.$router.push({name: 'Slide', params: {id: prev}})
    },
    checkRoute (route) {
      if (!Slides.state[parseInt(route)]) {
        this.$router.push({name: 'Slide', params: {id: 1}})
      }

      this.canNext = route < Slides.utils.size()
      this.canPrev = route > 1
    }
  }
}
</script>

<style scoped lang="scss">
</style>
