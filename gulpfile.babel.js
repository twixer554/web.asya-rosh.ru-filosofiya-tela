import gulp from 'gulp'
import clean from './gulp/tasks/clean'
import server from './gulp/tasks/server'
import { phpBuild, phpWatch } from './gulp/tasks/php'
import { stylesBuild, stylesWatch } from './gulp/tasks/styles'
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts'
import { imagesBuild, imagesWatch } from './gulp/tasks/images'
import { fontsBuild, fontsWatch } from './gulp/tasks/fonts'
import { spriteBuild, spriteWatch } from './gulp/tasks/sprites'
import config from './gulp/config'

config.setEnv()

export const build = gulp.series(
  clean,
  gulp.parallel(
    // phpBuild,
    stylesBuild,
    scriptsBuild,
    imagesBuild,
    spriteBuild,
    fontsBuild
  )
)

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    // phpWatch,
    stylesWatch,
    scriptsWatch,
    imagesWatch,
    spriteWatch,
    fontsWatch
  )
)

export const styles = gulp.series(stylesBuild)
