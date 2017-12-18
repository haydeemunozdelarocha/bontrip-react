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
      MapaContainer:'app/components/MapaContainer.jsx',
      Mapa:'app/components/Mapa.jsx',
      SidePlanner:'app/components/SidePlanner.jsx',
      Item:'app/components/Item.jsx',
      Header:'app/components/Header.jsx',
      Signup:'app/components/Signup.jsx',
      NewTrip:'app/components/NewTrip.jsx',
      NewPlace:'app/components/NewPlace.jsx',
      Actions: 'app/actions/actions.jsx',
      Styles:'public/styles/styles.css',
      configureStore:'app/store/configureStore.jsx',
      reducers: 'app/reducers/reducers.jsx'
          },
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders: [
    {
      loader: 'babel-loader',
      query:{
        plugins: ['transform-decorators-legacy' ],
        presets: ['react', 'es2015', 'stage-0']
      },
      test:/\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }, { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
