const webpack = require('webpack');

module.exports = {
  entry: [
    './app/app.jsx',
    'babel-polyfill'
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
        'NODE_ENV': JSON.stringify('production')
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
        exclude: '/node_modules/',
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-decorators-legacy']
        }
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
