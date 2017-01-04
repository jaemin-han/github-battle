var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

// above: when the webpack runs, its going to take our index.js file -- run it through a loader
// then convert jsx to javascript and output it /dist unber the 'dirname'
// - plugins run and take /app.index.html file and this is injected into the same directory
// index.html file is referenced in the index_bundle.js

module.exports = {
  entry: [
  './app/index.js'
  ],
  // where to put the file that creates for us
  output: {
    // 'dirname' name of the directory that currently executing code resides
    // webpack takes entry file and conversion and output to github-battle dist bundle
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  // what transformation to make on our code
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
      // babel jsx file - transpile to regular js file
     ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
