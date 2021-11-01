module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://pokeapi.co/api/v2",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
