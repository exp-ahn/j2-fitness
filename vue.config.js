const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.blog.naver.com', // 프록시할 대상 URL
        changeOrigin: true, // CORS 헤더를 설정
        pathRewrite: { '^/api': '' }, // /api로 시작하는 경로를 제거
        secure: false, // HTTPS 인증서를 무시
      },
    },
  },
})
