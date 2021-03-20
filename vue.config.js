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

  lintOnSave: true,
};
