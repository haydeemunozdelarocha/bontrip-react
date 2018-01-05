var React = require('react');
import Header from 'Header';
import ExploreCard from 'ExploreCard';
var GetPlaces = require('GetPlaces');
var Filters = require('Filters');
var SideExplore = require('SideExplore');
var {connect} = require('react-redux');
var actions = require('Actions');

var exploreStyle = {
  height:'100vh',
  width:'100%',
  overflowX:'hidden'
};


export var Explore = React.createClass({
  getInitialState: function(){
    var cities =this.props.state.trip.selectedTrip.cities || this.props.location.state.cities;

    return {
    venue:{},
    places:[],
    city:cities[0],
    cities:cities,
    category:'',
    showSide:'none'
  }
  },
  componentDidMount: function() {
   this.retrievePlaces();
  },
  componentDidUpdate: function(prevProps, prevState) {
      if(this.state.city != prevState.city || this.state.category != prevState.category){
        this.setState({loading:'visible'})
        this.retrievePlaces();
      }
  },
  retrievePlaces: function (){
    console.log('getting places')
    var that = this;
    var cities = that.state.cities;
    var city = that.state.city;
    var category = that.state.category;

    GetPlaces.getRecommended(city,category).then(function(res){
      if(res.data.error){
        alert(res.data.error);
      } else{
      that.setState({
        places:res.data,
        loading:'hidden'
      })
      }
      that.refs.spinner.style.display='none';
    }, function(errorMessage){
      that.setState({
        loading:'visible'
      })
      return   console.log(errorMessage);
    })
  },
  viewPlace: function(place_id){
    var that = this;
    GetPlaces.viewPlace(place_id).then(function(res){

        that.setState({
        venue:res.data,
      })
        that.setState({
        showSide:'block',
      })
    }, function(errorMessage){
         return console.log(errorMessage);
    })
  },
    addPlace: function(place){

    GetPlaces.addPlace(place).then(function(res){
      if(res.data._id){
        place.el.props.selected = true;
      }

    }, function(errorMessage){
         console.log(errorMessage);
    })
  },
  handleSideClose:function(){
  console.log('closing');
  console.log(this);
  this.setState({showSide:"none"});
  },
  changeCity:function(event){

    this.setState({
      city:event.target.value,
      places:[]
    });

  },
  changeCategory:function(event){
    this.setState({
      category:event.target.value,
      places:[]
    });

  },
  render: function () {
  console.log('rendering explore');
  if(this.props.state.trip.selectedTrip.id){
    var trip = true;
  } else {
    var trip = false;
  }

  if(this.state.loading === 'hidden'){
    var displayLoading = 'none';
  }else {
    var displayLoading ='flex';
  }
      return (
      <div style={exploreStyle}>
      <Header />
      <div className="filters">
      <Filters cities={this.state.cities} selectedCity={this.state.city} selectedCategory={this.state.category} changeCity={this.changeCity} changeCategory={this.changeCategory} tripSelected={trip}/>
      </div>
      <SideExplore handleClose={this.handleSideClose} display={this.state.showSide} name={this.state.venue.name} description={this.state.venue.description} rating={this.state.venue.rating} photos={this.state.venue.photos}/>
      <div style={{height:'74vh',width:'100%',justifyContent:'center',alignItems:'center',visibility:this.state.loading,display:displayLoading}} >
            <i style={{fontSize:'100px',color:'#e9e9e9'}} className="fa fa-spinner fa-spin" ref="spinner" aria-hidden="true"></i>
      </div>
      <div className="row" id="explore-container">
            {this.state.places && Object.keys(this.state.places).map(function(k, name) {
            return <ExploreCard  viewPlace={this.viewPlace}  name={this.state.places[k].venue.name} lat={this.state.places[k].venue.location.lat} lng={this.state.places[k].venue.location.lng} category={this.state.places[k].venue.categories[0].name} rating={this.state.places[k].venue.rating} photo ={this.state.places[k].photo} place_id={this.state.places[k].venue.id} key={this.state.places[k].venue.id}/>
        }.bind(this))}
      </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Explore);
