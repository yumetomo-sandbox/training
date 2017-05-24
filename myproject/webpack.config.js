module.exports = {
  // エントリーポイントの設定
  entry: './test/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス
    path: 'C:\\~~中略~~\\git\\training\\myproject\\test\\src\\js'
  },
  // ローダーの設定
  module: {
    loaders: [{
      // ローダーの対象ファイル
      test: /\.js$/,
      // ローダーの対象から外すディレクトリ
      exclude: /node_modules/,
      // 利用するローダー
      loader: 'babel-loader?presets[]=es2015'
    }]
  }
};
