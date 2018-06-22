var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: ["./CalendarFrontEnd/calendar.jsx"],
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: ["babel-loader"]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
