const path = require('path');
const webpack = require('webpack');

module.exports = {
  // エントリーポイントの設定
  entry: {
    index: path.join(__dirname,'test/carousel_training/js/index.js')
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].bundle.js',
    // 出力先のパス
    path: path.join(__dirname,'test/carousel_training/js')
  },
  // ローダーの設定
  module: {
    rules: [{
      // ローダーの対象ファイル
      test: /\.js$/,
      // ローダーの対象から外すディレクトリ
      exclude: /node_modules/,
      // 利用するローダー
      use: 'babel-loader?presets[]=es2015'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      velocity: 'velocity-animate',
      _: 'underscore'
    }),
  ]
};
