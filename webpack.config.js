var webpack = require('webpack');

module.exports = {
  entry: [
  'script!jquery/dist/jquery.min.js',
  './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devServer: {
        historyApiFallback:{index:'/'},
        },
  resolve: {
    root: __dirname,
    alias: {
      Home: 'app/components/Home.jsx',
      Login: 'app/components/Login.jsx',
      Navigation: 'app/components/Navigation.jsx',
      TripCard: 'app/components/TripCard.jsx',
      GetTrips: 'data/getTrips.jsx',
      GetPlaces: 'data/GetPlaces.jsx',
      CheckUser: 'data/CheckUser.jsx',
      Trips:'app/components/Trips.jsx',
      Explore:'app/components/Explore.jsx',
      ExploreCard:'app/components/ExploreCard.jsx',
      Filters:'app/components/Filters.jsx',
      SideExplore:'app/components/SideExplore.jsx',
      Planner:'app/components/Planner.jsx',
      Mapa:'app/components/Mapa.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders: [
    {
      loader: 'babel-loader',
      query:{
        presets: ['react', 'es2015', 'stage-0']
      },
      test:/\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }
    ]
  }
};
