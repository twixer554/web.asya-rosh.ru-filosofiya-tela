import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import config from '../config'

const spriteMono = () => {
  return gulp
    .src(`${config.src.sprites}/mono/*`)
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite-mono.svg',
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  {
                    removeAttrs: {
                      attrs: ['class', 'data-name', 'fill.*', 'stroke.*'],
                    },
                  },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(config.dest.sprites))
}

const spriteMulty = () => {
  return gulp
    .src(`${config.src.sprites}/multy/*`)
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite-multi.svg',
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  {
                    removeAttrs: {
                      attrs: ['class', 'data-name'],
                    },
                  },
                  {
                    removeUselessStrokeAndFill: false,
                  },
                  {
                    inlineStyles: true,
                  },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(config.dest.sprites))
}

const spriteBg = () => {
  return gulp
    .src(`${config.src.sprites}/background/*`)
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite-bg.svg',
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  {
                    removeAttrs: {
                      attrs: ['class', 'data-name'],
                    },
                  },
                  {
                    removeUselessStrokeAndFill: false,
                  },
                  {
                    inlineStyles: true,
                  },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(config.dest.sprites))
}

export const spriteBuild = gulp.parallel(spriteMono, spriteMulty, spriteBg)

export const spriteWatch = () => {
  gulp.watch(`${config.src.sprites}/mono/*`, spriteMono)
  gulp.watch(`${config.src.sprites}/multy/*`, spriteMulty)
  gulp.watch(`${config.src.sprites}/background/*`, spriteBg)
}
