import $ from 'jquery'
import { BREAKPOINTS } from '../helpers/const'
const SCROLLED_CLASS = 'mobile-menu-toggler_scrolled'

const $menu = $('.js-mobile-menu')
const $toggler = $('.js-mobile-menu-toggler')

export default function mobileMenu() {
  if ($(window).width() >= BREAKPOINTS.XS) return
  if ($menu.length === 0) return

  $toggler.on('click', function () {
    $menu.toggleClass('mobile-menu_opened')
    $toggler.toggleClass('mobile-menu-toggler_opened')
  })

  $(window).on('scroll', () => {
    const posY = $(window).scrollTop()

    if (posY > 80 && !$toggler.hasClass(SCROLLED_CLASS)) {
      return $toggler.addClass(SCROLLED_CLASS)
    }

    if (posY <= 80 && $toggler.hasClass(SCROLLED_CLASS)) {
      return $toggler.removeClass(SCROLLED_CLASS)
    }
  })
}
