import browserSync from 'browser-sync'
import config from '../config'

const server = (callback) => {
  browserSync.create().init({
    files: [
      `${config.dest.html}/*.html`,
      `${config.dest.php}/**/*.php`,
      `${config.dest.css}/*.css`,
      `${config.dest.js}/*.js`,
      `${config.dest.sprites}/*.svg`,
      {
        match: `${config.dest.images}/**/*`,
        fn() {
          this.reload()
        },
      },
    ],
    // open: false,
    // notify: false,
    // tunnel: true,
    proxy: 'localhost/web.asya-rosh/filosofiya-telaapp/',
  })

  callback()
}

export default server
