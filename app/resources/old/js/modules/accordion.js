import $ from 'jquery'

export default function accordion(selector = '.js-rates-block-toggler') {
  $(selector).on('click', function () {
    console.log(1)
    $(this).siblings('.js-rates-block-program').slideToggle()
  })
}
