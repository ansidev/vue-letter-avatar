const path = require("path");
const webpack = require("webpack");
const productionMode = process.env.NODE_ENV === "production";
const PostCSS = require("postcss-cssnext");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const entryPath = productionMode ? "./src/index.js" : "./test/index.js";
if (productionMode) {
  output = {
    path: path.join(__dirname, 'dist'),
    filename: "index.js",
    library: "VueLetterAvatar",
    libraryTarget: "umd"
  }
} else {
  output = {
    path: path.join(__dirname, 'test/dist'),
    publicPath: '/dist',
    filename: 'index.js'
  }
}
module.exports = {
  entry: entryPath,
  output: output,
  devServer: {
    contentBase: path.join(__dirname, "test"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "vue-loader",
            options: {
              postcss: [PostCSS()]
            }
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        uglifyOptions: {
          warnings: false,
          compress: {
            warnings: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: "#source-map",
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
