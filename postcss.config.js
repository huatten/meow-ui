module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["> 0.01%", "Android >= 4.0", "Firefox ESR", "iOS >= 8.0"]
    },
    'postcss-pxtorem': {
      rootValue: 100, //结果为：设计稿元素尺寸100分之一，比如元素宽750px,最终页面会换算成 7.5rem
      propList: ['*', '!border-width', '!border-top-width', '!border-right-width', '!border-bottom-width', '!border-left-width'],
      exclude: /node_modules/i
    }
  }
};