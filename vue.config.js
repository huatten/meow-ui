const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: "./",
  outputDir: "demo",
  productionSourceMap: false,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("examples"),
        'packages': resolve("packages")
      }
    }
  },
  chainWebpack: config => {
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
      .include.add("/examples")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });

    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
  }
};
