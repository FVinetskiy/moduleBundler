import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from "webpackbar";

const { ModuleFederationPlugin } = require('webpack').container;

enum Environment {
  Development = 'development',
  Production = 'production',
}

module.exports = {
    mode: Environment.Development,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devServer: {
      port: 3000,
      open: true,
      hot: false,
    },
    output: {
      publicPath: "auto",
    },
    plugins: [
        new WebpackBar(),
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css'}),
        new ModuleFederationPlugin({
          name: "app1",
          remotes: {
            app2: "app2@http://localhost:3002/remoteEntry.js",
          },
          shared: { react: { singleton: true, eager: true, requiredVersion: false }},
        }),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
              test: /\.jsx?$/,
              loader: "babel-loader",
              exclude: /node_modules/,
              options: {
                  presets: ["@babel/preset-react"],
              },
          },
        ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    devtool: 'eval-source-map',
};