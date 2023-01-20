import $ from 'jquery'

// Разметка стрелок
export function sliderArrow(direction, classes = '') {
  classes = classes.split(' ')
  classes = classes.map((className) => `${className} ${className}_${direction}`)

  const markup = `
  <button class="slider-arrow slider-arrow_${direction} ${classes}"><svg>
      <use xlink:href="assets/sprites/sprite-mono.svg#slider-arrow" />
  </svg></button>`

  return markup
}

// Вставить стрелки после slick-list
export function appendArrowsAfterSlickList($slider) {
  $slider.each(function () {
    const $arrows = $(this).find('.slick-arrow')
    const $slickList = $(this).find('.slick-list')

    $arrows.insertAfter($slickList)

    $slider.on('breakpoint', () => appendArrowsAfterSlickList($slider))
  })
}
