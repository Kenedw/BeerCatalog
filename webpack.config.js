import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import WebpackPwaManifest from "webpack-pwa-manifest";
import ServiceWorkerWebpackPlugin from "serviceworker-webpack-plugin";

module.exports = {
  entry: [path.join(__dirname, "src", "index.js")],
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parallel: true,
          cach: true,
          compress: {
            unused: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "iso-morphic-style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      inject: false
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, "public", "favicon.png"),
      icons: {
        android: true,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new WebpackPwaManifest({
      name: "Beer Catalog",
      short_name: "BeerCatalog",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      theme_color: "#ffffff",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.join(__dirname, "public", "favicon.png"),
          sizes: [96, 128, 192, 256, 384, 512, 1024]
        }
      ]
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, "src/sw.js")
    })
  ]
};
