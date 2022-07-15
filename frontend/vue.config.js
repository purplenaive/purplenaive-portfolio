const { defineConfig } = require('@vue/cli-service');

const target = "http://localhost:3000"

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/css/global";
        `,
      }
    }
  },
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
