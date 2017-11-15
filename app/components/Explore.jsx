var React = require('react');
var Navigation = require('Navigation');
var ExploreCard = require('ExploreCard');
var GetPlaces = require('GetPlaces');
var Filters = require('Filters');
var SideExplore = require('SideExplore');

var exploreStyle = {
  height:'100%',
  width:'100%',
  overflowX:'auto'
};

var Explore = React.createClass({

    getInitialState: function (){
      console.log('getting initial state');
      return this.props.location.state || {places:[],venue:{name:''}};
  },
  componentDidMount: function() {
    this.retrievePlaces();

  },
  retrievePlaces: function (){
    console.log('getting places')
    var that = this;
    console.log(that.state.city);
    var city = that.state.city || 'Mexico City';
    GetPlaces.getRecommended(city).then(function(res){
      that.setState({
        places:res.data
      })
    }, function(errorMessage){
      that.setState({
        loading:true
      })
      return   console.log(errorMessage);
    })
  },
    handleMore: function (e){
    var id = this.props.place_id;
    console.log('handleMore',this.props);
    // this.viewPlace(id);
  },
  viewPlace: function(place_id){
    console.log(place_id);
    var that = this;
    // GetPlaces.viewPlace(place_id).then(function(res){

    //   console.log(res);
    //     that.setState({
    //     venue:res
    //   })

    // }, function(errorMessage){
    //      return console.log(errorMessage);
    // })
  },
  render: function () {

      return (
      <div style={exploreStyle}>
      <Navigation />
      <div className="filters">
      <Filters />
      </div>
      <div className="row">
      <SideExplore name={this.state.venue.name}/>
            {this.state.places && Object.keys(this.state.places).map(function(k, name) {
            return <ExploreCard handleMore={()=>{this.handleMore().bind(this)}} name={this.state.places[k].venue.name} rating={this.state.places[k].venue.rating} photo ={this.state.places[k].photo} place_id={this.state.places[k].venue.id} key={this.state.places[k].venue.id}/>
        }.bind(this))}
      </div>
      </div>
    );

  }
});

module.exports = Explore;
