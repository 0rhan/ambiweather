const { merge } = require("webpack-merge");

const commonConfig = require("../webpack-common");
const cssLoader = require("../parts/css-loader");
const tsLoader = require("../parts/ts-loader");

const config = merge(
  commonConfig,
  {
    mode: "production",
  },
  tsLoader,
  cssLoader
);

module.exports = config
