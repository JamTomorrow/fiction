// postcss-pxtorem 是一款 postcss 插件，用于将单位转化为 rem
// lib-flexible 用于设置 rem 基准值
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
