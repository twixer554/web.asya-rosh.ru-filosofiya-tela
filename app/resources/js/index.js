// node_modules
import svg4everybody from 'svg4everybody'

// modules
import lazyLoad from './modules/lazyLoad'
import setBg from './modules/setBg'
import useWebp from './modules/useWebp'

import inputmask from './modules/inputmask'
import ymap from './modules/ymap'

import accordion from './modules/accordion'
import formSubmit from './modules/formSubmit'
import gallery from './modules/gallery'
import mobileMenu from './modules/mobile-menu'
import modal from './modules/modal'
import scrollTo from './modules/scrollTo'
import tabs from './modules/tabs'

// sliders
import {
  personalSlider,
  licensesSlider,
  reviewsSlider,
  advType12Slider,
  srvType3Slider,
} from './sliders'

document.addEventListener('DOMContentLoaded', () => {
  useWebp()
  setBg()
  lazyLoad()
  svg4everybody()
  inputmask()

  accordion()
  formSubmit()
  gallery()
  mobileMenu()
  modal()
  scrollTo()
  tabs()

  licensesSlider()
  personalSlider()
  reviewsSlider()
  advType12Slider()
  srvType3Slider()

  ymap()
})

window.addEventListener(
  'resize',
  () => {
    const WINDOW_WIDTH = window.innerWidth

    setBg(WINDOW_WIDTH)
    const $sectionHasBg = document.querySelectorAll('[data-bg]')
    for (let $section of $sectionHasBg) {
      const bgUrl = $section.dataset.bg
      $section.style.backgroundImage = `url(${bgUrl})`
    }
  },
  true
)
