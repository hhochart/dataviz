<template>
  <transition-group appear name="fade" mode="out-in">
    <div v-for="slide in allSlides" class="slide global-container" :key="slide.id" v-if="slide.id == currentSlide.id" :style="{backgroundImage: `url(${getBackgroundImage})`}">
      {{ slide.img }}
      <h1 v-html="slide.title"></h1>
      <div class="choices">
        <div class="choice" v-for="(choice, index) in slide.choices" :key="index" :style="{top: `${choice.top}px`, left: `${choice.left}px`}">
          <img :src="choice.img" alt="">
          <div class="name">{{ choice.name }}</div>
        </div>
      </div>

      <button @click="nextSlide" class="btn" v-if="canNext">Suivant</button>
      <br>
      <button @click="prevSlide" class="btn" v-if="canPrev">Precedent</button>

      <div class="counter">
        <span class="count-current">0{{ $route.params.id }}</span><br>
        <span class="count-total">0{{ totalSlides }}</span>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Slides from './Slides'
import etape1 from '@/assets/fond-ecran2.png'
import etape2 from '@/assets/fond-ecran3.png'
import etape3 from '@/assets/fond-ecran4.png'
import etape4 from '@/assets/fond-ecran5.png'

export default {
  name: 'Slide',
  data () {
    return {
      currentSlide: Slides.state[parseInt(this.$route.params.id)],
      allSlides: Slides.state,
      totalSlides: Slides.utils.size(),
      canNext: true,
      canPrev: true,
      backgroundImage: etape1
    }
  },
  computed: {
    getBackgroundImage () {
      switch (this.$route.params.id.toString()) {
        case '1':
          return etape1
        case '2':
          return etape2
        case '3':
          return etape3
        case '4':
          return etape4
        default:
          return etape1
      }
    }
  },
  filters: {
    toString (el) {
      return el.toString()
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.checkRoute(to.params.id)
    this.currentSlide = Slides.state[parseInt(to.params.id)]
    next()
  },
  created () {
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

      this.canNext = route < this.totalSlides
      this.canPrev = route > 1
    }
  }
}
</script>
