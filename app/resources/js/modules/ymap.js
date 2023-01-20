import $ from 'jquery'
import ymaps from 'ymaps'

const TIME_TO_LOAD = 0
const ID = 'map'

export default function ymap() {
  const $container = $('#' + ID)
  if (!$container.length) return false

  const center = $container.data('mapCenter')
  const a = +center.split(',')[0]
  const b = +center.split(' ')[1]

  const addMap = () => {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then((maps) => {
        const map = new maps.Map(ID, {
          center: [a, b],
          zoom: 16,
          controls: [],
        })

        map.controls.add('zoomControl')

        screen.width < 1070 ? map.behaviors.disable('drag') : ''

        const myPlacemark = new maps.Placemark(
          [a, b],
          {
            hintContent: '',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: BASE_URL + '/assets/img/map-marker.png',
            iconImageSize: [89, 99],
            iconImageOffset: [-40, -89],
          }
        )

        map.geoObjects.add(myPlacemark)
        map.behaviors.disable('scrollZoom')
      })
      .catch((error) => console.log('Failed to load Yandex Maps', error))
  }

  if (
    typeof Promise !== 'undefined' &&
    Promise.toString().indexOf('[native code]') !== -1
  ) {
    setTimeout(() => {
      addMap()
    }, TIME_TO_LOAD)
  }
}
