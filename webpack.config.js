const webpack = require('webpack');
console.log(__dirname);
module.exports = {
  mode: 'development',
  entry: [
    './app/app.jsx',
  ],
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'ACCESSKEY': JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
        'SECRETACCESSKEY': JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
        'GOOGLE_KEY':JSON.stringify(process.env.GOOGLE_KEY),
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devServer: {
    historyApiFallback:{index:'/'},
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*','.js','.jsx']
  },
  module:{
    noParse: [
      /aws\-sdk/,
    ],
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS
        ]
      },
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }]
  }
};
