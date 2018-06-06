<template>
  <div class="results">
    Page des resultats
    <div class="results global-container">
      <div v-for="(result, index) in results" :key="index">
        <span v-html="result"></span>
      </div>
    </div>
  </div>
</template>

<script>
import datas from './data.json'

export default {
  name: 'Results',
  data () {
    return {
      datas: datas,
      results: {
        1: 'Arabe',
        2: 'glace',
        3: 'Trois quatre',
        4: 'Plus de deux portions'
      },
      occurences: [],
      stats: {}
    }
  },
  mounted () {
    // Preparation du tableaux occurences
    this.datas.forEach((d, i) => {
      this.occurences[i] = [i, 0]
    })

    this.datas.forEach((data, dataIndex) => { // chaque element du json
      Object.keys(data).forEach((element, elementIndex) => { // chaque question
        let elementIndexIncremented = elementIndex + 1
        if (elementIndex < 4) { // seulement fav cuisine, comfort food, fruit et veggies
          if (data[element].includes(this.results[elementIndexIncremented].toLowerCase())) {
            // si la reponse est dans la chaine de caratere, on increment le tableau des occurences
            this.occurences[dataIndex][1]++
          }
        }
      })
    })
    // On trie le tableau avec le + d'ocurrence en premier
    this.occurences.sort((a, b) => b[1] - a[1])

    // TODO: split en 2 tableau
    // 1 tableau : no vitamins, un deuxieme avec vitamins a afficher si on clique sur le bouton

    // on remplie le tableau de stats (on limite a 3 results juges 'corrects'
    console.log(this.occurences)
    for (let i = 0; i < 3; i++) {
      let resultIndex = this.occurences[i][0]
      this.stats[i] = this.datas[resultIndex]
    }

    console.log(this.stats)

    /*
    * TODO: Uncomment
    */
    // if (Object.keys(this.$results).length === 0) {
    //   this.$router.push({name: 'Slide', params: {id: 1}})
    // }
  }
}
</script>
