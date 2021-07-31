const HtmlWebpackPlugin = require("html-webpack-plugin");
const { APP_DIR, BUILD_DIR } = require("./constants.js");

module.exports = {
  entry: APP_DIR,
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "src/index.html"
    }),
  ],
  output: {
    filename: "main.js",
    path: BUILD_DIR,
    clean: true,
  },
};
