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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__WS__': JSON.stringify('wss://sankana-api.herokuapp.com/cable')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
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
