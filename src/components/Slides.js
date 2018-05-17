const slides = {
  state: {
    1: {
      title: `C'est parti ! Dis-moi tout, tu es plutot <br> pasta, pizza ou fajitas ?`,
      choices: {
        choice1: {
          name: 'Francaise',
          img: require('../assets/francaise.png'),
          top: 50,
          left: 50
        },
        choice2: {
          name: 'Indienne',
          img: require('../assets/indienne.png'),
          top: 550,
          left: 150
        },
        choice3: {
          name: 'Arabe',
          img: require('../assets/arabe.png'),
          top: 550,
          left: 250
        },
        choice4: {
          name: 'Asiat',
          img: require('../assets/asiat.png'),
          top: 350,
          left: 350
        },
        choice5: {
          name: 'Espagnol',
          img: require('../assets/espagnol.png'),
          top: 550,
          left: 550
        },
        choice6: {
          name: 'Americaine',
          img: require('../assets/americaine.png'),
          top: 650,
          left: 650
        },
        choice7: {
          name: 'Africaine',
          img: require('../assets/africaine.png'),
          top: 750,
          left: 750
        },
        choice8: {
          name: 'Jamaicaine',
          img: require('../assets/jamaicaine.png'),
          top: 850,
          left: 850
        }
      }
    },
    2: {
      title: 'Slide2',
      subtitle: 'Food2'
    },
    3: {
      title: 'Slide3',
      subtitle: 'Food3'
    }
  },
  utils: {
    size: function () {
      let size = 0
      let key
      for (key in slides.state) {
        if (slides.state.hasOwnProperty(key)) size++
      }
      return size
    }
  }
}

export default slides
