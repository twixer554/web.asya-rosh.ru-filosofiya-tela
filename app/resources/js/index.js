// node_modules
import svg4everybody from 'svg4everybody'

// modules
import * as module from './modules'
import * as slider from './sliders'

document.addEventListener('DOMContentLoaded', () => {
  module.lazyLoad()
  module.useWebp()
  svg4everybody()
  // setBg()
  // lazyLoad()
  // svg4everybody()

  module.modal()

  module.scrollTo()
  module.scrollTo('.js-anchor', 'href')

  slider.reviewsType_1()
  slider.reviewsType_2()
  slider.students()
})
