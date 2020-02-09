const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, args) => {
  var isdev = args.mode === 'development';
  return {
    entry: './src/index.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'main.js'
    },
    devServer: {
      contentBase: './dist'
    },  
    devtool: isdev ? 'eval-source-map' : 'source-map',
    optimization: {
      minimizer: isdev ?
        [] :
        [
          new UglifyJSPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true
              }
            },
          }),
        ]
    },
  }
};