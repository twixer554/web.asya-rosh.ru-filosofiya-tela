import gulp from 'gulp'
import gulpif from 'gulp-if'
import debug from 'gulp-debug'
import changed from 'gulp-changed'
import imagemin from 'gulp-imagemin'
import imageminWebp from 'imagemin-webp'
import rename from 'gulp-rename'
import config from '../config'

function copyImages() {
  return gulp
    .src(`${config.src.images}/**/*`)
    .pipe(changed(config.dest.images))
    .pipe(
      gulpif(
        config.isProd,
        imagemin({
          progressive: true,
        })
      )
    )
    .pipe(debug({ title: 'images: ' }))
    .pipe(gulp.dest(config.dest.images))
}

function convertToWebp() {
  return gulp
    .src(`${config.src.images}/**/*.{jpg,png}`)
    .pipe(changed(config.dest.images, { extension: '.webp' }))
    .pipe(imagemin([imageminWebp({ quality: 100 })]))
    .pipe(rename({ extname: '.webp' }))
    .pipe(debug({ title: 'webp: ' }))
    .pipe(gulp.dest(config.dest.images))
}

export const imagesBuild = gulp.series(copyImages, convertToWebp)

export const imagesWatch = () =>
  gulp.watch(`${config.src.images}/**/*`, { ignoreInitial: false }, imagesBuild)
