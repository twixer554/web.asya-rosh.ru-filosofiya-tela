import $ from 'jquery'
import 'magnific-popup'

export default function gallery(selector = '.js-gallery') {
  $('.js-rates-block-toggler').on('click', function () {
    console.log(1)
    $(this).siblings('.js-rates-block-program').slideToggle()
  })

  const $gallery = $(selector)
  if (!$gallery.length) return

  $gallery.each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Изображение загружаестя',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [1, 1],
      },
    })
  })
}
