// node_modules
import svg4everybody from 'svg4everybody'

// modules
import lazyLoad from './modules/lazyLoad'
import setBg from './modules/setBg'
import useWebp from './modules/useWebp'

import accordion from './modules/accordion'
import formSubmit from './modules/formSubmit'
import modal from './modules/modal'
import scrollTo from './modules/scrollTo'

document.addEventListener('DOMContentLoaded', () => {
  useWebp()
  setBg()
  lazyLoad()
  svg4everybody()

  accordion()
  formSubmit()
  modal()
  scrollTo()
})
