const slides = {
  state: {
    1: {
      id: 1,
      title: `C'est parti ! Dis-moi tout, tu es plutot <br> pasta, pizza ou fajitas ?`,
      choices: {
        choice1: {
          name: 'Francaise',
          img: require('../assets/francaise.png'),
          top: 750,
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
      id: 2,
      title: 'Petit coup de mou… qu’est ce que tu manges<br>pour te remonter le moral ?',
      choices: {
        choice1: {
          name: 'Pizza',
          img: require('../assets/pizza.png'),
          top: 500,
          left: 500
        },
        choice2: {
          name: 'Pizza',
          img: require('../assets/pizza.png'),
          top: 500,
          left: 500
        },
        choice3: {
          name: 'Pizza',
          img: require('../assets/pizza.png'),
          top: 500,
          left: 500
        },
        choice4: {
          name: 'Pizza',
          img: require('../assets/pizza.png'),
          top: 500,
          left: 500
        },
        choice5: {
          name: 'Pizza',
          img: require('../assets/pizza.png'),
          top: 500,
          left: 500
        }
      }
    },
    3: {
      id: 3,
      title: 'On dit qu’il faut manger environ 3 fruits<br>par jour, tu en es à combien toi ?',
      choices: {
        choice1: {
          name: 'Aucune',
          img: require('../assets/arabe.png'),
          top: 500,
          left: 500
        },
        choice2: {
          name: 'Aucune',
          img: require('../assets/arabe.png'),
          top: 500,
          left: 500
        },
        choice3: {
          name: 'Aucune',
          img: require('../assets/arabe.png'),
          top: 500,
          left: 500
        },
        choice4: {
          name: 'Aucune',
          img: require('../assets/arabe.png'),
          top: 500,
          left: 500
        },
        choice5: {
          name: 'Aucune',
          img: require('../assets/arabe.png'),
          top: 500,
          left: 500
        }
      }
    },
    4: {
      id: 4,
      title: 'Passons aux légumes, est ce que tu en<br>manges à chaque repas ?',
      choices: {
        choice1: {
          name: 'Radis',
          img: require('../assets/radis.png'),
          top: 500,
          left: 500
        },
        choice2: {
          name: 'Salade',
          img: require('../assets/salade.png'),
          top: 500,
          left: 500
        },
        choice3: {
          name: 'Poivron',
          img: require('../assets/poivron.png'),
          top: 500,
          left: 500
        },
        choice4: {
          name: 'Carotte',
          img: require('../assets/carotte.png'),
          top: 500,
          left: 500
        },
        choice5: {
          name: 'Aubergine',
          img: require('../assets/aubergine.png'),
          top: 100,
          left: 500
        }
      }
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
