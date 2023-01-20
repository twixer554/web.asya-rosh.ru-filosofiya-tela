import $ from 'jquery'

export default function accordion(
  selector = '.js-accordion',
  OPENED_CLASS = '_opened'
) {
  const $accordion = $(selector)
  if ($accordion.length === 0) return

  $accordion.each(function (i) {
    const $body = $(this).find('.js-accordion-body')
    const $toggler = $(this).find('.js-accordion-toggler')

    $toggler.on('click', () => {
      $body.slideToggle()
      $(this).toggleClass(OPENED_CLASS)
    })

    if (i === 0) {
      return $(this).addClass(OPENED_CLASS)
    }

    $body.hide()
  })
}
