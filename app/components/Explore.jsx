const React = require('react');
const GetPlaces = require('../api/GetPlaces');
const { connect } = require('react-redux');
const $ = require('jquery');
const SideExplore = require('./SideExplore');
import ExploreCard from './ExploreCard';

export var Explore = React.createClass({

  getInitialState: function(){

    return {
    venue:{},
    places:this.props.places,
    city:this.props.city,
    cities:this.props.cities,
    category:'',
    showSide:'none',
    explore:false  }
  },
  componentDidUpdate: function(prevProps, prevState) {
      if(this.state.city != prevState.city || this.state.category != prevState.category){
        this.setState({loading:'visible'})
        this.props.retrievePlaces(this.state.category);
      }
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
  handleSideClose:function(){
  this.setState({showSide:"none"});
  },
  changeCategory:function(event){
    this.setState({
      category:event.target.value,
      places:[]
    });

  },
  showExplore:function(){
    console.log('show explore')
    $( ".explore-tab-container" ).toggleClass("open-explore", 300);

  },
  render: function () {

  if(this.props.state.trip.selectedTrip.id){
    var trip = true;
  } else {
    var trip = false;
  }
  if(this.props.loading === 'hidden'){
    var displayLoading = 'none';
  }else {
    var displayLoading ='flex';
  }
  if(this.props.open){
      var show = 'visible';
      var display = 'block';
    } else {
      var show = 'hidden';
      var display ='none';
    }
      return (
      <div id="explore-content">
      <div className="filters">
        <select id="searchby" style={{width:'90%'}} value={this.state.category} onChange={this.changeCategory}>
              <option value="">Select Category</option>
              <option value="4d4b7104d754a06370d81259">Arts & Entertainment</option>
              <option value="4d4b7105d754a06374d81259">Food</option>
              <option value="4d4b7105d754a06376d81259">Nightlife</option>
              <option value="4d4b7105d754a06377d81259">Outdoors</option>
              <option value="4d4b7105d754a06378d81259">Shopping</option>
        </select>
      </div>
              <SideExplore handleClose={this.handleSideClose} display={this.state.showSide} name={this.state.venue.name} description={this.state.venue.description} rating={this.state.venue.rating} photos={this.state.venue.photos}/>

      <div className="row" id="explore-container">
       <div id="explore-loading-container" style={{visibility:this.props.loading,display:displayLoading}} >
            <i className="fa fa-spinner fa-spin" ref="spinner" aria-hidden="true"></i>
      </div>
            {this.props.places && Object.keys(this.props.places).map(function(k, name) {
            return <ExploreCard  fetchPlaces={this.props.fetchPlaces} viewPlace={this.viewPlace}  name={this.props.places[k].venue.name} lat={this.props.places[k].venue.location.lat} lng={this.props.places[k].venue.location.lng} category={this.props.places[k].venue.categories[0].name} rating={this.props.places[k].venue.rating} photo ={this.props.places[k].photo} place_id={this.props.places[k].venue.id} key={this.props.places[k].venue.id}/>
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
