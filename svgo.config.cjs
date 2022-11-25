module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: false,
        },
      },
    },
    'prefixIds',
    'removeDimensions',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: ['width="100%"', 'height="100%"', 'role="img"'],
      },
    },
  ],
}
