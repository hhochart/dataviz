const slides = {
  state: {
    1: {
      id: 1,
      title: `C'est parti ! Dis-moi tout, tu es plutot <br> pasta, pizza ou fajitas ?`,
      choices: {
        choice1: {
          name: 'Francaise',
          img: require('../assets/francaise.png'),
          style: {
            top: '30px',
            left: '20px'
          }
        },
        choice2: {
          name: 'Indienne',
          img: require('../assets/indienne.png'),
          style: {
            top: '280px',
            left: '250px'
          }
        },
        choice3: {
          name: 'Arabe',
          img: require('../assets/arabe.png'),
          style: {
            top: '100px',
            left: '500px'
          }
        },
        choice4: {
          name: 'Asiat',
          img: require('../assets/asiat.png'),
          style: {
            top: '350px',
            left: '640px'
          }
        },
        choice5: {
          name: 'Espagnol',
          img: require('../assets/espagnol.png'),
          style: {
            top: '-20px',
            left: '800px'
          }
        },
        choice6: {
          name: 'Americaine',
          img: require('../assets/americaine.png'),
          style: {
            top: '250px',
            left: '950px'
          }
        },
        choice7: {
          name: 'Africaine',
          img: require('../assets/africaine.png'),
          style: {
            top: '100px',
            left: '1200px'
          }
        },
        choice8: {
          name: 'Jamaicaine',
          img: require('../assets/jamaicaine.png'),
          style: {
            top: '350px',
            left: '1300px'
          }
        }
      }
    },
    2: {
      id: 2,
      title: 'Petit coup de mou… que manges-tu<br>pour te remonter le moral ?',
      choices: {
        choice1: {
          name: 'Pizza',
          img: require('../assets/pizza.png'),
          style: {
            top: '50px',
            left: '0px'
          }
        },
        choice2: {
          name: 'Glace',
          img: require('../assets/icecream.png'),
          style: {
            top: '250px',
            left: '250px'
          }
        },
        choice3: {
          name: 'Cookies',
          img: require('../assets/cookies.png'),
          style: {
            top: '50px',
            left: '500px'
          }
        },
        choice4: {
          name: 'Chocolat',
          img: require('../assets/chocolate.png'),
          style: {
            top: '250px',
            left: '750px'
          }
        },
        choice5: {
          name: 'Chips',
          img: require('../assets/chips.png'),
          style: {
            top: '120px',
            left: '1050px'
          }
        }
      }
    },
    3: {
      id: 3,
      title: 'On dit qu’il faut manger environ 3 fruits<br>par jour, tu en es à combien toi ?',
      choices: {
        choice1: {
          name: 'Aucun',
          img: require('../assets/etape1.png'),
          style: {
            bottom: '50px',
            left: '50px'
          }
        },
        choice2: {
          name: 'Une portion',
          img: require('../assets/etape2.png'),
          style: {
            bottom: '50px',
            left: '250px'
          }
        },
        choice3: {
          name: 'Deux portions',
          img: require('../assets/etape3.png'),
          style: {
            bottom: '50px',
            left: '480px'
          }
        },
        choice4: {
          name: 'Trois portions',
          img: require('../assets/etape4.png'),
          style: {
            bottom: '50px',
            left: '700px'
          }
        },
        choice5: {
          name: '+ de quatre portions',
          img: require('../assets/etape5.png'),
          style: {
            bottom: '50px',
            left: '950px'
          }
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
          style: {
            top: '200px',
            left: '50px'
          }
        },
        choice2: {
          name: 'Salade',
          img: require('../assets/salade.png'),
          style: {
            top: '300px',
            left: '220px'
          }
        },
        choice3: {
          name: 'Poivron',
          img: require('../assets/poivron.png'),
          style: {
            top: '180px',
            left: '440px'
          }
        },
        choice4: {
          name: 'Carotte',
          img: require('../assets/carotte.png'),
          style: {
            top: '280px',
            left: '700px'
          }
        },
        choice5: {
          name: 'Aubergine',
          img: require('../assets/aubergine.png'),
          style: {
            top: '100px',
            left: '1000px'
          }
        }
      }
    }
  },
  utils: {
    size: function (obj = slides.state) {
      let size = 0
      let key
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++
      }
      return size
    }
  }
}

export default slides
