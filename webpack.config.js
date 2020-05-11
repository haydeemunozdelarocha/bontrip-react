const webpack = require('webpack');
console.log(__dirname);
module.exports = {
  mode: 'development',
  entry: [
    './app/app.tsx',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
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
    extensions: ['*','.ts','.tsx', '.js', '.jsx']
  },
  module:{
    noParse: [
      /aws\-sdk/,
    ],
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        loader: 'babel-loader',
        query: {compact: false}
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
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
              tsx: true
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
