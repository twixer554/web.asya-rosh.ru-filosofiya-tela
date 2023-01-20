import gulp from 'gulp'
import gulpif from 'gulp-if'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import sassGlob from 'gulp-sass-glob'
import autoprefixer from 'gulp-autoprefixer'
import gcmq from 'gulp-group-css-media-queries'
import cleanCSS from 'gulp-clean-css'
import smartGrid from 'smart-grid'
import importFresh from 'import-fresh'
import config from '../config'

const SMART_GRID_CONFIG_NAME = 'smart-grid.config.js'

const sassBuild = () => {
  return gulp
    .src(`${config.src.sass}/main.scss`)
    .pipe(plumber())
    .pipe(gulpif(config.isDev, sourcemaps.init()))
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['./node_modules'],
      }).on('error', sass.logError)
    )
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(gulpif(config.isDev, sourcemaps.write()))
    .pipe(gulp.dest(config.dest.css))
}

const smartGridBuild = (callback) => {
  const smartGridConfig = importFresh(`../../${SMART_GRID_CONFIG_NAME}`)
  smartGrid(`${config.src.sass}/generated`, smartGridConfig)

  callback()
}

export const stylesBuild = gulp.series(smartGridBuild, sassBuild)

export const stylesWatch = () => {
  gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild)
  gulp.watch(`./${SMART_GRID_CONFIG_NAME}`, smartGridBuild)
}
