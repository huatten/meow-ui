const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: "./",
  //修改src目录为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    // 目录别名alias
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("packages", resolve("packages"))
      .set("assets", resolve("examples/assets"))
      .set("components", resolve("examples/components"))
      .set("router", resolve("examples/router"))
      .set("store", resolve("examples/store"))
      .set("view", resolve("examples/view"));

    // lib目录是组件库最终打包好存放的地方，不需要eslint检查
    config.module
      .rule("eslint")
      .exclude.add(path.resolve("lib"))
      .end();
    // packages和examples目录需要加入编译
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });

    //svg-sprite-loader配置
    const svgRule = config.module.rule("svg"); // 找到svg-loader
    svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "[name]"
      });
    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("examples/assets/svg-icon"));
    config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  }
  // css: {
  //   // 是否使用css分离插件
  //   extract: true,
  //   loaderOptions: {
  //     // 配置scss全局变量
  //     sass: {
  //       data: `@import "~/_style/index.scss";`
  //     }
  //   }
  // }
};
