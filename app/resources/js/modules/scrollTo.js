export default function scrollTo(
  selector = '[data-anchor]',
  attribute = 'data-anchor'
) {
  const $anchorLink = document.querySelectorAll(selector)

  addListener($anchorLink, 'click', function (e) {
    e.preventDefault()

    const blockID = this.getAttribute(attribute).substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}
