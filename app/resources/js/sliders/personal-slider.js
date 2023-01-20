import $ from 'jquery'
import 'slick-carousel'
import { sliderArrow } from './slider-arrow'
import { BREAKPOINTS } from '../helpers/const'

const $slider = $('.js-personal-slider')

export default function personalSlider() {
  if (!$slider.length) return

  $slider.slick({
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    prevArrow: sliderArrow('prev', 'personal__slider-arrow'),
    nextArrow: sliderArrow('next', 'personal__slider-arrow'),
    rows: 0,
    responsive: [
      {
        breakpoint: BREAKPOINTS.XS,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
}
