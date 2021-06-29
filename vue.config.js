const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        // '@static': resolve('/static'),
      },
    },
  },

  lintOnSave: true,
};
