import $ from 'jquery'
import 'magnific-popup'

export default function modal(selector = '.js-get-modal') {
  const $modalBtn = $(selector)

  if ($modalBtn.length === 0) return

  $modalBtn.on('click', function (e) {
    e.preventDefault()

    const modalId = $(this).data('modal')
    return openModal(modalId, 'mfp-with-fade')
  })
}

export function openModal(modalId, mainClass = '') {
  $.magnificPopup.open({
    type: 'inline',
    items: {
      src: modalId,
    },
    midClick: true,
    mainClass: `${mainClass}`,
    removalDelay: 500,
    showCloseBtn: true,
    fixedContentPos: true,
    callbacks: {
      open: () => {
        $('.js-close-modal').on('click', (e) => $.magnificPopup.close())
      },
    },
  })
}
