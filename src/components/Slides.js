const slides = {
  state: {
    1: {
      title: 'Slide1',
      subtitle: 'Food1',
      choice1: {
        name: 'Pizza',
        img: 'Pizza.png'
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
