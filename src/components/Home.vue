<template>
  <div class="home global-container">

    <div class="apropos">
      <span>A propos</span>
    </div>

    <div class="container">
      <div class="left-wrapper">
        <div class="title">
          Dis-nous ce que tu manges,<br>
          on te dira qui tu es !
        </div>
        <div class="content">
          Tu te poses des questions sur ta future vie etudiante ?<br>
          Parle moi rapidement de tes habitudes alimentaires et je te dirai <br>
          pour quel niveau d'etudes es-tu fais. Petit plus, tu sauras aussi le salaire<br>
          que tu toucheras durant ses belles annees<br>
          Tu n'imagines pas a quelle point ce que tu manges en dit long sur toi...
        </div>

        <router-link class="btn" tag="button" to="slide/1"> Tester l'experience</router-link>
      </div>

      <div class="right-wrapper">
        <img src="../assets/illustration-ecran1.png" alt="">
      </div>
    </div>

    <div class="mentions-legales">
      <span>Mentions legales</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>
