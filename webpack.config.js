const Path = require("path")

module.exports = {
  context: __dirname,
  entry: "./js/ClientApp.js",
  output: {
    path: Path.join(__dirname, "/public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.jsx?$/, loader: "babel-loader"}
    ]
  }
}
