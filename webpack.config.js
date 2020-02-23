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
        'NODE_ENV': JSON.stringify('development'),
        'BONTRIP_MAP_KEY': JSON.stringify(process.env.BONTRIP_MAP_KEY)
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
              jsx: true
            }
          }
        ]
      },
      {
        test: /\.scss|css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }]
  }
};
