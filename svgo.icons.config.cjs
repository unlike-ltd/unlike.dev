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
        attributes: ['width="1em"', 'height="1em"', 'role="img"'],
      },
    },
  ],
}
