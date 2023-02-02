window.addListener = (element, event, handler) => {
  const $elem =
    typeof element === 'string' ? document.querySelectorAll(element) : element

  $elem.forEach((element) => {
    element.addEventListener(event, handler)
  })
}
