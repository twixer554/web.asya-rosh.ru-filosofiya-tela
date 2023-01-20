import $ from 'jquery'
import 'slick-carousel'
import { BREAKPOINTS } from '../helpers/const'

const $slider = $('.js-reviews-slider')

export default function reviewsSlider() {
  if (!$slider.length) return

  $slider.slick({
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    dots: true,
    dotsClass: 'reviews__slider-dots',
    // prevArrow: sliderArrow('prev', 'personal__slider-arrow'),
    // nextArrow: sliderArrow('next', 'personal__slider-arrow'),
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
