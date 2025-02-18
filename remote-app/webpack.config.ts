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
      port: 3002,
      open: true,
    },
    output: {
      publicPath: "auto",
    },
    plugins: [
        new WebpackBar(),
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css'}),
        new ModuleFederationPlugin({
          name: 'app2',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App.tsx',
          },
          shared: { react: { singleton: true, eager: false, requiredVersion: false }},
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
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
    devtool: 'inline-source-map',
};