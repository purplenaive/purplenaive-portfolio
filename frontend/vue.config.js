const { defineConfig } = require('@vue/cli-service');

const target = "http://localhost:3000"

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../backend/public",
  devServer: {
    historyApiFallback: true,
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
      }
    }
  }
})
