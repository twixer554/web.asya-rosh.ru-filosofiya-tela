import $ from 'jquery'
import { BREAKPOINTS } from '../helpers/const'

const WINDOW_WIDTH = $(window).width()

const $section = $('[data-bg]')

export default function setBg(windowWidth = WINDOW_WIDTH) {
  // if ($section.length === 0) return
  // $section.each(function () {
  //   let bgUrl = $(this).data('bg')
  //   if (windowWidth < BREAKPOINTS.XS) {
  //     bgUrl = $(this).data('mobileBg')
  //   }
  //   if (windowWidth >= BREAKPOINTS.XS) {
  //     bgUrl = $(this).data('desktopBg')
  //   }
  //   $(this).attr('data-bg', bgUrl)
  // })
}
