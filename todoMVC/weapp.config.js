module.exports = {
  plugins: [
    'weapp-plugin-babel',
    'weapp-plugin-require',
    'weapp-plugin-less',
    'weapp-plugin-pug',
    'weapp-plugin-eslint',
  ],
  env: {
    production: {
      plugins: ['weapp-plugin-jsmin', 'weapp-plugin-filemin', 'weapp-plugin-imgmin'],
    },
  },
};
