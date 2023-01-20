import $ from 'jquery'

const ACTIVE_CONTENT_CLASS = 'active'
const ACTIVE_BTN_CLASS = 'tabs__btn_active'

const $tabs = $('.js-tabs')

export default function tabs() {
  if (!$tabs.length) return

  $tabs.each(function () {
    const $content = $(this).find('.js-tabs-content')
    const $btn = $(this).find('.js-tabs-btn')

    $content.each((i, elem) =>
      i > 0 ? $(elem).hide() : $(elem).addClass(ACTIVE_CONTENT_CLASS)
    )
    $btn.on('click', toggleTabs)

    $(this).addClass('tabs-initialized')
  })
}

function toggleTabs() {
  const _href = $(this).data('tabContent')
  const $content = $(_href)

  if ($content.hasClass(ACTIVE_CONTENT_CLASS)) return

  $content.siblings().hide().removeClass(ACTIVE_CONTENT_CLASS)
  $content.show().addClass(ACTIVE_CONTENT_CLASS)

  $(this).siblings().removeClass(ACTIVE_BTN_CLASS)
  $(this).addClass(ACTIVE_BTN_CLASS)
}
