const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

const plugins = function getPluginsArray() {
  const base = [
    new CleanWebpackPlugin(),
    new CopyPlugin({ patterns: ['favicon.ico', '*.png'] }),
    new HTMLPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: false
      }
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.[hash].css' })
  ];

  // if (isProduction) base.push(new BundleAnalyzerPlugin());

  return base;
};

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, 'src'),

  entry: {
    main: ['./index.js']
  },

  devServer: {
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000,
    contentBase: [path.join(__dirname, 'src')],
    watchContentBase: true,
    useLocalIp: true,
    overlay: true,
    hot: true
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@scss': path.resolve(__dirname, 'src/assets/scss')
    }
  },

  devtool: isDevelopment ? 'source-map' : '',

  plugins: plugins(),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /.(scss|css)$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
              reloadAll: true
            }
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',

            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },

  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
};
