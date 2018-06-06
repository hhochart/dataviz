<template>
  <transition-group appear name="fade" mode="out-in">
    <div v-for="slide in allSlides" class="slide global-container" :key="slide.id" v-if="slide.id == currentSlide.id" :style="{backgroundImage: `url(${getBackgroundImage})`}" :class="`slide-${slide.id}`">
      {{ slide.img }}
      <h1 v-html="slide.title"></h1>
      <div class="choices">
        <div class="choice" v-for="(choice, index) in slide.choices" :key="index" :style="choice.style" role="button" @click="selection(index)" :class="{selected: selected === index}">
          <Picto :src="choice.img" :name="choice.name"></Picto>
        </div>
      </div>

      <button @click="nextSlide" class="btn" v-if="canNext && !isLastSlide">Suivant</button>
      <button @click="goToResults" class="btn" v-else>Voir le resultat</button>

      <div class="counter">
        <span class="count-current">0{{ $route.params.id }}</span><br>
        <span class="count-total">0{{ totalSlides }}</span>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Slides from './Slides'
import Picto from './Picto'
import etape1 from '@/assets/fond-ecran2.png'
import etape2 from '@/assets/fond-ecran3.png'
import etape3 from '@/assets/fond-ecran4.png'
import etape4 from '@/assets/fond-ecran5.png'

export default {
  name: 'Slide',
  components: {Picto},
  data () {
    return {
      currentSlide: Slides.state[parseInt(this.$route.params.id)],
      allSlides: Slides.state,
      totalSlides: Slides.utils.size(),
      canNext: true,
      isLastSlide: false,
      backgroundImage: etape1,
      selected: null
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
    if (this.$results[this.currentSlide.id] !== null) {
      this.checkRoute(to.params.id)
      this.currentSlide = Slides.state[parseInt(to.params.id)]
      next()
    }
  },
  created () {
    this.checkRoute(this.$route.params.id)
  },
  methods: {
    nextSlide () {
      if (this.$results[this.currentSlide.id] !== undefined) {
        let next = parseInt(this.$route.params.id) + 1
        this.$router.push({name: 'Slide', params: {id: next}})
        this.selected = null
      } else {
        alert('Faites un choix')
      }
    },
    goToResults () {
      if (Slides.utils.size() === Slides.utils.size(this.$results)) {
        this.$router.push({name: 'Results'})
      } else {
        alert('Faites un dernier choix')
      }
    },
    checkRoute (route) {
      if (!Slides.state[parseInt(route)] || (Object.keys(this.$results).length === 0 && route !== 1)) {
        this.$router.push({name: 'Slide', params: {id: 1}})
        route = 1
      }

      this.canNext = route < this.totalSlides
      this.isLastSlide = route === this.totalSlides
    },
    selection (choiceId) {
      this.selected = choiceId
      this.$results[this.currentSlide.id] = this.currentSlide.choices[choiceId].name
    }
  }
}
</script>
