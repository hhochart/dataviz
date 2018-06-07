<template>
  <div class="results slide global-container">
    <h1>Decouvre tes resultats !</h1>
    <div class="subtitle">De quoi te projeter plus serieusement dans ton futur<br>
      (et rassurer tes parents... ou pas).
    </div>
    <img :src="imgIllustration" alt="" class="img-illu">

    <div class="container">
      <div class="left-container">
        <h2>Ton niveau d'etudes</h2>
        <div class="donut-container">
          <div class="donut">
            <img src="http://via.placeholder.com/400x400" alt="">
          </div>
          <div class="figure-container">
            <figure class="legends">
              <img :src="donut1" alt="">
              <figcaption>Premiere annee</figcaption>
            </figure>
            <figure class="legends">
              <img :src="donut2" alt="">
              <figcaption>Deuxieme annee</figcaption>
            </figure>
            <figure class="legends">
              <img :src="donut3" alt="">
              <figcaption>Troisieme annee</figcaption>
            </figure>
            <figure class="legends">
              <img :src="donut4" alt="">
              <figcaption>Quatrieme annee</figcaption>
            </figure>
          </div>
        </div>
        <transition name="fade" appear tag="ul" v-if="currentResult === novitamins">
          <div class="vitamin-container">
            <div class="vitamin-text">
              Decu ? Et si tu essayais de prendre quelques vitamine ?<br>
              Tu gagneras peut etre un peu plus ...
            </div>
            <button class="btn" @click="useVitamin">
              Tester les vitamines
            </button>
          </div>
        </transition>
      </div>
      <div class="right-container">
        <h2>Ton salaire</h2>
        <div class="salary-container">
          <div class="salary" v-for="(result, index) in salaryResult" :key="index" :data-order="result[0]">
            <div class="gauge">
              <span class="blue" :style="{height: `calc(75 * ${result[1]}px)`}"></span>
            </div>
            <div class="salary-text" v-html="pipeResult(result[0])">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import datas from './data.json'
import imgIllustration from '../assets/illustration-ecran6.png'
import donut1 from '../assets/donuts1.png'
import donut2 from '../assets/donuts2.png'
import donut3 from '../assets/donuts3.png'
import donut4 from '../assets/donuts4.png'

export default {
  name: 'Results',
  data () {
    return {
      datas,
      imgIllustration,
      donut1,
      donut2,
      donut3,
      donut4,
      style: {},
      occurences: [],
      vitamins: [],
      novitamins: [],
      currentResult: [],
      salaryResult: [],
      nbResults: 5
    }
  },
  watch: {
    currentResult (val) {
      let temp = []
      val.forEach((e) => {
        temp.push(e.income)
      })

      temp.forEach((x) => {
        this.salaryResult[x] = (this.salaryResult[x] || 0) + 1
      })

      // On passe un talbeau d'objet en tableau de tableau
      this.salaryResult = this.entries(this.salaryResult)
    }
  },
  mounted () {
    if (Object.keys(this.$results).length === 0) {
      this.$router.push({name: 'Slide', params: {id: 1}})
    }

    // Preparation du tableaux occurences
    this.datas.forEach((d, i) => {
      this.occurences[i] = [i, 0] // on garde l'index du tableau pour le recuperer apres le filter
    })

    this.incrementOccurences()
    // On trie le tableau avec le + d'ocurrence en premier
    this.occurences.sort((a, b) => b[1] - a[1])

    // on split en 2 tableaux : le premier contient les resultats avec vitamine, le deuxieme non
    // on prend arbitrairement les 3 premiers resultats
    this.vitamins = this.occurences.filter(a => a[2] === true).slice(0, this.nbResults)
    this.novitamins = this.occurences.filter(a => a[2] === false).slice(0, this.nbResults)

    // on remplace les index et nb d'occurences par leur valeur dans le json initial
    this.vitamins.forEach((e, i) => {
      this.vitamins[i] = this.datas[e[0]] // e[0] = l'index sauvegarde
    })

    // on remplace les index et nb d'occurences par leur valeur dans le json initial
    this.novitamins.forEach((e, i) => {
      this.novitamins[i] = this.datas[e[0]] // e[0] = l'index sauvegarde
    })

    // On set le resultat courrant au resultat sans vitamine
    this.currentResult = this.novitamins
  },
  methods: {
    incrementOccurences () {
      this.datas.forEach((data, dataIndex) => { // chaque element du json
        this.occurences[dataIndex][2] = data['vitamins'] === 'Oui'
        Object.keys(data).forEach((element, elementIndex) => { // chaque question
          let elementIndexIncremented = elementIndex + 1
          if (elementIndex < 4) { // seulement fav cuisine, comfort food, fruit et veggies
            if (data[element].includes(this.$results[elementIndexIncremented].toLowerCase())) {
              // si la reponse est dans la chaine de caratere, on increment le tableau des occurences
              this.occurences[dataIndex][1]++
            }
          }
        })
      })
    },
    useVitamin () {
      this.currentResult = this.vitamins
    },
    entries (obj) {
      let ownProps = Object.keys(obj)
      let i = ownProps.length
      let resArray = new Array(i)
      while (i--) { resArray[i] = [ownProps[i], obj[ownProps[i]]] }

      return resArray
    },
    pipeResult (value) {
      let a = value.split('$')
      let val = a[0] + '$ <br/>' + a[1]
      return val
    }
  }
}
</script>
