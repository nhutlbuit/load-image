const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const CompressionPlugin = require('compression-webpack-plugin');
process.env = dotenv.parsed;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 

const VENDOR_LIBS = [
  'axios',
  'moment',
  'prop-types',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'react-select',
  'react-toastify',
  'redux',
  'redux-saga',
  '@reduxjs/toolkit',
  'react-bootstrap'
]

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: process.env.NODE_ENV,
  // Disable generate source map
  devtool: 'false',
  // the app entry point is /src/index.js
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.tsx'),
    vendor: VENDOR_LIBS
  },
  output: {
    // the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: '[name].js',
    chunkFilename: `[id].chunk.js`,
  },
  optimization: {
   // usedExports: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        // for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiler JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader to transpile JavaScript to es5 
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        // for any file with a suffix of js or jsx
        test: /\.tsx?$/,
        // ignore transpiler JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the ts-loader to transpile Typescript to Javascript.
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
      name: '[id].chunk.js',
      chunks: 'all',
    }
  },
  // add a custom index.html as the template
  plugins: 
  [
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vender', 'manifest']
    // }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new CompressionPlugin({
      algorithm: 'gzip',
      cache: true,
      deleteOriginalAssets: false
    }), // config nginx to load file gzip
    new BundleAnalyzerPlugin()
  ]
};