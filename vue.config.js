module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
      }
    }
  }
}