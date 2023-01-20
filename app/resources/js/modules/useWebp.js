function canUseWebp() {
  let elem = document.createElement('canvas')
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  }
  return false
}

export default function useWebp() {
  const $section = document.querySelectorAll('[data-bg]')

  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./)
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0

  if (canUseWebp() || firefoxVer >= 65) {
    document.body.classList.add('use-webp')
    for (let i = 0; i < $section.length; i++) {
      replaceImageUrl($section[i], 'data-bg')
    }
  }
}

function replaceImageUrl(elem, attr) {
  let imageUrl = elem.getAttribute(attr)
  imageUrl = imageUrl.split('.').slice(0, -1).join('.')

  return elem.setAttribute(attr, `${imageUrl}.webp`)
}
