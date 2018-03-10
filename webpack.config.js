const path = require('path')
const webpack = require('webpack')

module.exports = { 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build'
  },  
  plugins: [
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      '__WS__': JSON.stringify('ws://localhost:3000/cable')
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},       
          {loader: "css-loader"},         
          {loader: "sass-loader"}         
        ]
      }
    ]
  }

}
