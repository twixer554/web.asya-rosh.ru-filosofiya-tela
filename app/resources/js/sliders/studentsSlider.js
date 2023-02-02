export default function studentsSlider() {
  const swiper = new Swiper('.js-students-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 60,
    lazy: true,
    autoHeight: true,
    navigation: {
      nextEl: '.js-students-slider-arrow._next',
      prevEl: '.js-students-slider-arrow._prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })
}
