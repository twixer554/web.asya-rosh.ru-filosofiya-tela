const app = 'app'
// const theme = `${app}/wp-content/theme/theme`
const resources = `${app}/resources`
const assets = `${app}/assets`

const config = {
  src: {
    root: resources,
    php: `${app}`,
    sass: `${resources}/scss`,
    js: `${resources}/js`,
    images: `${resources}/img`,
    fonts: `${resources}/fonts`,
    sprites: `${resources}/sprites`,
  },

  dest: {
    root: assets,
    php: `${app}`,
    css: `${assets}/css`,
    js: `${assets}/js`,
    images: `${assets}/img`,
    fonts: `${assets}/fonts`,
    sprites: `${assets}/sprites`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod')
    this.isDev = !this.isProd
  },
}

export default config
