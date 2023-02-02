import $ from 'jquery'

export default function formSubmit(selector = '.js-form') {
  const $form = $(selector)
  if ($form.length === 0) return

  $form.on('submit', function (e) {
    e.preventDefault()

    const action = $(this).attr('action')

    $.ajax({
      url: action,
      type: 'POST',
      data: $(this).serialize(),
      success: (res) => {
        const data = JSON.parse(res)

        if (data.status != true) {
          const errors = data.errors
            .map((obj) => {
              return Object.values(obj)[0]
            })
            .filter((error) => error != true)
          return alert(errors.join('\n'))
        }

        alert('Ваша заявка принята!')
      },
      error: () => alert('Что-то пошло не так. Попробуйте еще раз'),
    })
  })
}
