const { BUILD_DIR } = require("../constants.js");
const { merge } = require("webpack-merge");

const commonConfig = require("../webpack-common");
const cssLoader = require("../parts/css-loader");
const tsLoader = require("../parts/ts-loader");

const loader = merge([
  commonConfig,
  {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
      contentBase: BUILD_DIR,
      index: "index.html",
      compress: true,
      host: "0.0.0.0",
      port: 3000,
      hot: true,
      overlay: true,
    },
  },
  tsLoader,
  cssLoader
]);

module.exports = loader;
