import $ from 'jquery'
import 'magnific-popup'

export default function scrollTo(selector = '.js-anchor') {
  const $anchorLink = $(selector)
  if ($anchorLink.length === 0) return

  $anchorLink.on('click', function (e) {
    if ($.magnificPopup.instance.isOpen) {
      $.magnificPopup.close()
    }

    const _href = $(this).attr('href')
    const hashIndex = _href.indexOf('#')
    const anchor = _href.indexOf('#') !== -1 ? _href.slice(hashIndex) : false
    const $anchor = $(anchor)

    if ($anchor.length === 0) return

    e.preventDefault()
    const scrollPos = $anchor.offset().top

    $('html, body').animate(
      {
        scrollTop: `${scrollPos}px`,
      },
      700
    )

    return false
  })
}
