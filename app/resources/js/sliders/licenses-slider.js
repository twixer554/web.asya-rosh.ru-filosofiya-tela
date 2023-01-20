import $ from 'jquery'
import 'slick-carousel'
import { sliderArrow } from './slider-arrow'
import { BREAKPOINTS } from '../helpers/const'

const $slider = $('.js-licenses-slider')

export default function licensesSlider() {
  if (!$slider.length) return

  $slider.slick({
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    prevArrow: sliderArrow('prev', 'licenses__slider-arrow'),
    nextArrow: sliderArrow('next', 'licenses__slider-arrow'),
    rows: 0,
    responsive: [
      {
        breakpoint: BREAKPOINTS.XS,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })
}
