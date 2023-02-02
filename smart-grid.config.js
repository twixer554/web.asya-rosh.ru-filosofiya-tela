module.exports = {
  filename: 'smartgrid',
  outputStyle: 'scss',
  columns: 2,
  offset: '6vw',
  mobileFirst: true,
  container: {
    maxWidth: '100vw',
    fields: '9.375vw',
  },
  breakPoints: {
    lg: {
      width: '600px',
      fields: '4.6875vw',
      offset: '2.34375vw',
    },
    xl: {
      width: '1280px',
      fields: '50px',
      offset: '30px',
    },
  },
}
