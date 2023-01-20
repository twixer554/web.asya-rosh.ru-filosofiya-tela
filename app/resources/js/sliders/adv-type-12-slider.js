import $ from 'jquery'
import 'slick-carousel'
import { sliderArrow } from './slider-arrow'
import { BREAKPOINTS } from '../helpers/const'

const $slider = $('.js-adv-type-12-slider')

export default function advType12Slider() {
  if (!$slider.length) return

  $slider.slick({
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    prevArrow: sliderArrow('prev', 'adv-type-12__slider-arrow'),
    nextArrow: sliderArrow('next', 'adv-type-12__slider-arrow'),
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
