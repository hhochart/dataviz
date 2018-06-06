import francaise from '../assets/francaise.png'
import indienne from '../assets/indienne.png'
import arabe from '../assets/arabe.png'
import asiat from '../assets/asiat.png'
import espagnol from '../assets/espagnol.png'
import americaine from '../assets/americaine.png'
import africaine from '../assets/africaine.png'
import jamaicaine from '../assets/jamaicaine.png'
import pizza from '../assets/pizza.png'
import icecream from '../assets/icecream.png'
import cookies from '../assets/cookies.png'
import chocolate from '../assets/chocolate.png'
import chips from '../assets/chips.png'
import etape1 from '../assets/etape1.png'
import etape2 from '../assets/etape2.png'
import etape3 from '../assets/etape3.png'
import etape4 from '../assets/etape4.png'
import etape5 from '../assets/etape5.png'
import radis from '../assets/radis.png'
import salade from '../assets/salade.png'
import poivron from '../assets/poivron.png'
import aubergine from '../assets/aubergine.png'
import carotte from '../assets/carotte.png'

const slides = {
  state: {
    1: {
      id: 1,
      title: `C'est parti ! Dis-moi tout, tu es plutot <br> pasta, pizza ou fajitas ?`,
      choices: {
        choice1: {
          name: 'Francaise',
          img: francaise,
          style: {
            top: '30px',
            left: '20px'
          }
        },
        choice2: {
          name: 'Indienne',
          img: indienne,
          style: {
            top: '280px',
            left: '250px'
          }
        },
        choice3: {
          name: 'Arabe',
          img: arabe,
          style: {
            top: '100px',
            left: '500px'
          }
        },
        choice4: {
          name: 'Asiat',
          img: asiat,
          style: {
            top: '350px',
            left: '640px'
          }
        },
        choice5: {
          name: 'Espagnol',
          img: espagnol,
          style: {
            top: '-20px',
            left: '800px'
          }
        },
        choice6: {
          name: 'Americaine',
          img: americaine,
          style: {
            top: '250px',
            left: '950px'
          }
        },
        choice7: {
          name: 'Africaine',
          img: africaine,
          style: {
            top: '100px',
            left: '1200px'
          }
        },
        choice8: {
          name: 'Jamaicaine',
          img: jamaicaine,
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
          img: pizza,
          style: {
            top: '50px',
            left: '0px'
          }
        },
        choice2: {
          name: 'Glace',
          img: icecream,
          style: {
            top: '250px',
            left: '250px'
          }
        },
        choice3: {
          name: 'Cookies',
          img: cookies,
          style: {
            top: '50px',
            left: '500px'
          }
        },
        choice4: {
          name: 'Chocolat',
          img: chocolate,
          style: {
            top: '250px',
            left: '750px'
          }
        },
        choice5: {
          name: 'Chips',
          img: chips,
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
          img: etape1,
          style: {
            bottom: '50px',
            left: '50px'
          }
        },
        choice2: {
          name: 'Un seul',
          img: etape2,
          style: {
            bottom: '50px',
            left: '250px'
          }
        },
        choice3: {
          name: 'Deux',
          img: etape3,
          style: {
            bottom: '50px',
            left: '480px'
          }
        },
        choice4: {
          name: 'Trois quatre',
          img: etape4,
          style: {
            bottom: '50px',
            left: '700px'
          }
        },
        choice5: {
          name: 'Plus de quatre',
          img: etape5,
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
          name: 'Aucun',
          img: radis,
          style: {
            top: '200px',
            left: '50px'
          }
        },
        choice2: {
          name: 'Une demi portion',
          img: salade,
          style: {
            top: '300px',
            left: '220px'
          }
        },
        choice3: {
          name: 'Une portion',
          img: poivron,
          style: {
            top: '180px',
            left: '440px'
          }
        },
        choice4: {
          name: 'Deux portions',
          img: carotte,
          style: {
            top: '280px',
            left: '700px'
          }
        },
        choice5: {
          name: 'Plus de deux portions',
          img: aubergine,
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
