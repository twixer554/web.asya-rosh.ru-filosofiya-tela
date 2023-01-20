import gulp from 'gulp'
import config from '../config'
import plumber from 'gulp-plumber'
import newer from 'gulp-newer'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
import { notify } from 'browser-sync'

export const fontsBuild = () => {
  return gulp
    .src(`${config.src.fonts}/**/**`)
    .pipe(plumber())
    .pipe(newer(config.dest.fonts))
    .pipe(
      fonter({
        formats: ['ttf', 'woff', 'eot'],
      })
    )
    .pipe(gulp.dest(config.dest.fonts))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(config.dest.fonts))
}

export const fontsWatch = () =>
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild)
