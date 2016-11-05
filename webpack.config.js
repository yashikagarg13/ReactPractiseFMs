const Path = require("path")

module.exports = {
  context: __dirname,
  entry: "./js/BrowserEntry.jsx",
  output: {
    path: Path.join(__dirname, "/public"),
    filename: "bundle.js",
    // where to put all chunks
    publicPath: '/public/' // where we are serving are static files from
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.jsx?$/, loader: "babel-loader"},
      {test: /\.json$/, loader: "json-loader"}
    ]
  }
}
