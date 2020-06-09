const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const chalk = require('chalk');
const Components = require('./get-components')();
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const entries = {};
Components.forEach(c => {
  entries[c] = `./packages/${c}/index.js`;
});

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    // library: 'meow-ui',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'img/[name].[hash:7].[ext]',
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('packages'), resolve('examples/assets')]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: 'build single component [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    }),
    new VueLoaderPlugin()
  ]
};

