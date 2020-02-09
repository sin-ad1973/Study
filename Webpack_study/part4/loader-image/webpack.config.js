module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  devServer: {
      contentBase: './dist'
    },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  }
};