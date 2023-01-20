import $ from 'jquery'
import 'slick-carousel'
import { sliderArrow } from './slider-arrow'
import { BREAKPOINTS } from '../helpers/const'

const $slider = $('.js-srv-type-3-slider')

export default function srvType3Slider() {
  if (!$slider.length) return

  $slider.slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    prevArrow: sliderArrow('prev', 'srv-type-3__slider-arrow'),
    nextArrow: sliderArrow('next', 'srv-type-3__slider-arrow'),
    appendArrows: $('.js-srv-type-3-slider-arrows'),
    rows: 0,
    // responsive: [
    //   {
    //     breakpoint: BREAKPOINTS.XS,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //       dots: true,
    //       dotsClass: 'slider-dots',
    //       asNavFor: null,
    //     },
    //   },
    // ],
  })
}
