<template>
  <div class="home">

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

<style scoped lang="scss">
  @import '../scss/variables';

  .home {
    display: block;
    min-height: 100vh;
    padding: 50px 5% 50px 5%;
    box-sizing: border-box;
    background: url('../assets/fond-ecran1.png') no-repeat right center;
    background-size: contain;
    @media (max-width: 1200px) {
      background-size: cover;
    }
    .apropos {
      color: $bleufonce;
      position: absolute;
      font-size: 20px;
      cursor: pointer;
      span {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          height: 2px;
          width: 0;
          background-color: $bleufonce;
          left: 0;
          bottom: -5px;
          transition: .3s ease-in-out;
        }
        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
    }
    .container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      min-height: calc(100vh - 100px);
      & > * {
        padding: 50px 0;
      }
      @media (max-width: 1200px) {
        & > * {
          padding: 50px 0;
        }
      }
      .left-wrapper {
        flex: 60%;
        flex-shrink: 1;
        @media (max-width: 1200px) {
          flex-basis: 100%;
        }
        .title {
          color: black;
          font-weight: bold;
          font-size: 25px;
          letter-spacing: 1px;
          line-height: 1.5em;
        }
        .content {
          margin-top: 30px;
          font-weight: 100;
          line-height: 1.5em;
        }
        .btn {
          font-weight: 500;
          font-size: 17px;
          background-color: $bleufonce;
          color: #fff;
          border: 2px solid transparent;
          border-radius: 30px;
          padding: 15px 25px;
          margin-top: 30px;
          cursor: pointer;
          transition: .3s ease-in-out;
          &:hover {
            background-color: transparent;
            border: 2px solid $bleufonce;
            color: $bleufonce;
          }
        }
      }
      .right-wrapper {
        flex: 40%;
        flex-shrink: 2;
        img {
          width: 100%;
        }
      }
    }
    .mentions-legales {
      position: absolute;
      right: 20px;
      bottom: 20px;
      cursor: pointer;
      @media (max-width: 1200px) {
        display: block;
        position: relative;
        text-align: center;
      }
      span {
        transition: .3s ease-in-out;
        color: $grisfonce;
        &:hover {
          color: black;
        }
      }
    }
  }
</style>
