var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
    plugins: [
      new webpack.ProvidePlugin("styles.css"),
    ], 

    module: {
      loaders : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader',      
          query: {
            presets: ['react', 'es2015']
         }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        },
        {test: /\.less$/,loader: 'style-loader!css-loader?importLoaders=2&sourceMap&localIdentName=[local]__[hash:base64:5]!less-loader'}, 
        { test: /\.css/, loader: 'style-loader!css-loader?importLoaders=2&sourceMap&localIdentName=[local]__[hash:base64:5]' },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
      // rules: [
      //   {
      //     test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      //     use: {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 100000,
      //       },
      //     },
      //   },
      //   {
      //     test: /\.css$/,
      //     include: /node_modules/,
      //     use: ExtractTextPlugin.extract({
      //       fallback: "style-loader",
      //       use: [
      //         {
      //           loader: 'css-loader',
      //         },
      //         {
      //           loader: 'postcss-loader',
      //         },
      //       ],
      //     })
      //   }
      // ]
  }
};


