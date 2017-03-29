const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './index.js',
      './index.html',
      './index.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(html|css)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  }
}
