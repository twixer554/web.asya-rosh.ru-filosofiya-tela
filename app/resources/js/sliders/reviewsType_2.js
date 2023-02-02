export default function reviewsType_2() {
  const swiper = new Swiper('.js-reviews-type-2-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    lazy: true,
    autoHeight: true,
    navigation: {
      nextEl: '.js-reviews-type-2-slider-arrow._next',
      prevEl: '.js-reviews-type-2-slider-arrow._prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })
}
