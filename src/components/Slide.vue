<template>
  <div class="slide" :style="{backgroundImage: `url(${getBackgroundImage})`}">
    <h1 v-html="currentSlide.title"></h1>

    <div class="choices">
      <div class="choice" v-for="(choice, index) in currentSlide.choices" :key="index" :style="{top: `${choice.top}px`, left: `${choice.left}px`}">
        <img :src="choice.img" alt="">
        <div class="name">{{ choice.name }}</div>
      </div>
    </div>

    <button @click="nextSlide" v-if="canNext">Suivant</button>
    <br>
    <button @click="prevSlide" v-if="canPrev">Precedant</button>

    <div class="counter">
      {{ $route.params.id }} / {{ totalSlides }}
    </div>
  </div>
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
      totalSlides: Slides.utils.size(),
      canNext: true,
      canPrev: true
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

<style scoped lang="scss">
  @import '../scss/variables';

  .slide {
    background-size: contain;
    background: no-repeat top right;
    min-height: 100vh;
    .choices {
      position: relative;
      .choice {
        position: absolute;
        &:hover {
          .name {
            opacity: 1;
          }
        }
        img {
          background-color: $grisclair;
          padding: 30px 10px;
          border-radius: 100%;
        }
        .name {
          opacity: 0;
          top: 10px;
          position: relative;
          text-align: center;
          color: $grisfonce;
          transition: .3s ease-in-out
        }
      }
    }
  }
</style>
