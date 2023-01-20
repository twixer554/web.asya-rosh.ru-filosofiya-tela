import $ from 'jquery'

export default function formSubmit(selector = '.js-form') {
  const $form = $(selector)
  if ($form.length === 0) return

  $form.on('submit', function (e) {
    e.preventDefault()

    const action = BASE_URL + '/includes/phpMailer/mail.php'

    const phoneValue = $(this).find('input[type="tel"]').val() || ''

    if (phoneValue.indexOf('_') > -1) {
      return alert('Неверно введен номер телефона')
    }

    $.ajax({
      url: action,
      type: 'POST',
      data: $(this).serialize(),
      success: (res) => {
        window.location = BASE_URL + '/thanks'
      },
      error: () => {
        alert('Что-то пошло не так. Попробуйте еще раз')
      },
    })
  })
}
