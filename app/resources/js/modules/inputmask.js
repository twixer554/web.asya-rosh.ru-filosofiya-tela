import $ from 'jquery'
import Inputmask from 'inputmask/dist/jquery.inputmask.min'

export default function inputmask() {
  $('input[type="tel"]').inputmask('+7 (999) 999-99-99')
}
