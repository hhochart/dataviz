<template>
  <div class="hello">
    <h1>{{ currentSlide.title }}</h1>
    <h2>{{ currentSlide.subtitle }}</h2>
    Filtrer le nombre d'occurence dans le tableau de resultat <br>
    stockage des choix en localstorage
    <br>

    <button @click="nextSlide">Suivant</button>
    <br>
    <button @click="prevSlide">Precedant</button>
  </div>
</template>

<script>
import Slides from './Slides'

export default {
  name: 'Slide',
  data () {
    return {
      currentSlide: Slides.state[parseInt(this.$route.params.id)]
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.params.id)
    this.currentSlide = Slides.state[parseInt(to.params.id)]
    // react to route changes...
    next()
    // don't forget to call next()
  },
  methods: {
    nextSlide () {
      let next = parseInt(this.$route.params.id) + 1
      this.$router.push({name: 'Slide', params: {id: next}})
    },
    prevSlide () {
      let prev = parseInt(this.$route.params.id) - 1
      this.$router.push({name: 'Slide', params: {id: prev}})
    }
  }
}
</script>

<style scoped lang="scss">
</style>
