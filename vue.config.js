const path = require("path");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV); //是否生产环境
const IS_DEV = ["development", "dev"].includes(process.env.NODE_ENV); //是否开发环境
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: "./",
  //修改src目录为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // 目录别名alias
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("assets", resolve("examples/assets"))
      .set("components", resolve("examples/components"))
      .set("router", resolve("examples/router"))
      .set("store", resolve("examples/store"))
      .set("view", resolve("examples/view"));
    //扩展webpack配置，使得packages加入编译
    config.module.rule('js').include.add('/packages').end().use('babel').loader('babel-loader').tap(options => {
      return options;
    })
  },
  configureWebpack: config => {

  },
  css: {}
};
