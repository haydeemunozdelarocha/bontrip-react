var React = require('react');
var $= require('jquery');
var GetPlaces = require('GetPlaces');
var {connect} = require('react-redux');
var actions = require('Actions');
var moment = require('moment');
import update from 'immutability-helper';
import Header from 'Header';
import Explore from 'Explore';
import MapaContainer from 'MapaContainer';
import SidePlanner from 'SidePlanner';
import LeftPanel from 'LeftPanel';
import RightPanel from 'RightPanel';


export var Planner = React.createClass({
  getInitialState: function (){
    var cities =this.props.state.trip.selectedTrip.cities || this.props.location.state.cities;
    var likedPlaces = this.props.state.trip.likedPlaces || [];
    var dates = this.props.state.trip.selectedTrip.end ? true : false;
    return {
        loaded:false,
        user:this.props.state.login.user,
        trip:this.props.state.trip.selectedTrip.id,
        date: this.props.state.trip.selectedTrip.start || moment(new Date()).format('YYYY-MM-DD'),
        cards:[],
        places:[],
        likedPlaces:likedPlaces,
        location:{},
        city:cities[0].name +","+cities[0].state+","+cities[0].country,
        cities:cities,
        view:'all',
        category:'',
        loadingExplore:'visible',
        selectedDates:dates
    }
  },
  componentWillMount:function(){
    console.log(this.state)
  },
  shouldComponentUpdate:function(nextProps,nextState){
    if(JSON.stringify(this.props.state.trip.likedPlaces) !== JSON.stringify(nextProps.state.trip.likedPlaces)){
      this.setState({
        location:{lat:nextProps.state.trip.likedPlaces[0].coordinates.lat,
        lng:nextProps.state.trip.likedPlaces[0].coordinates.lon},
        likedPlaces:nextProps.state.trip.likedPlaces,
        cards:nextProps.state.trip.likedPlaces.filter((place)=> place.day === this.state.date)
      });
    }
    return true;
  },
  componentDidMount:function(){
    console.log('component did mount')
    this.fetchPlaces();
    this.retrievePlaces();
    this.scheduledPlaces();
  },
  select:function(event){
    var date = event.target.value;
    this.setState({date: date}, function () {
        this.scheduledPlaces();
      });
  },
  scheduledPlaces: function(){
    var that = this;
    var user = that.state.user;
    var date = that.state.date;
    var trip = that.state.trip;
    if(trip && user && date){
    GetPlaces.getDay(trip,user).then(function(res){
      if(that.state.view === 'all' && res.data){
      that.setState({
        cards:res.data
      });
      } else if(res.data.length ==0){
        that.setState({
          cards:[]
        })
      }else {
      that.setState({
        cards:res.data,
        likedPlaces:res.data
      });
      }
    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  } else {
    var places = this.state.likedPlaces.filter((place)=> place.day === date)
    that.setState({
      cards:places
    })
  }
  },
  schedulingPlace: function(marker){
  var that =this;
    var id= marker._id || marker.venueId;
    var user = that.state.user;

    if(user.length > 0){
    GetPlaces.schedulePlace(id,this.state.date).then(function(res){
         that.scheduledPlaces();
      },function(errorMessage){

          return   alert(errorMessage);
        })
    } else {
    var {dispatch} = that.props;
    var date =that.state.date;
      dispatch(actions.schedulePlaces(id,date));
      window.location.reload()
    }
  },
  fetchPlaces: function(mapProps,map) {
    console.log('fetching places')
    var that = this;
    var user = that.state.user;
    var trip = that.state.trip;
    if(trip && user){
  GetPlaces.getLikedPlaces(user,trip).then(function(res){
      if(res.data.length > 0){
      that.setState({
        likedPlaces:res.data,
        location:{lat:res.data[0].coordinates.lat,
        lng:res.data[0].coordinates.lon}
      });
      }
      },function(errorMessage){
          this.setState({
            likedPlaces:[]
          })
          return  alert(errorMessage);
      })
} else {
  if(this.props.state.trip.likedPlaces.length>0){
  this.setState({
    location:{lat:this.props.state.trip.likedPlaces[0].coordinates.lat,
    lng:this.props.state.trip.likedPlaces[0].coordinates.lon},
    likedPlaces:this.props.state.trip.likedPlaces
  });

}
}
  },
    retrievePlaces: function (category){
    var that = this;
    var cities = that.state.cities;
    var city = that.state.city;
    GetPlaces.getRecommended(city,category).then(function(res){
      if(res.data.error){
        alert(res.data.error);
      } else{
      var newState = {
        places:res.data,
        loadingExplore:'hidden',
        loaded:true
      };
      if(!that.state.location.lat){
        newState = {...newState,location:res.data[0].venue.location}
      }
      that.setState(newState)
      }
    }, function(errorMessage){
      that.setState({
        loadingExplore:'visible'
      })
      return   console.log(errorMessage);
    })
  },
  updateOrder:function(dragIndex, hoverIndex){
    const { cards } = this.state;
    const dragCard = cards[dragIndex];
    var that = this;
   GetPlaces.changeOrder(cards[hoverIndex]._id,dragIndex,dragCard._id,hoverIndex).then(function(res){
        that.setState(
      update(that.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
    }, function(errorMessage){

      return  console.log(errorMessage);
    })
  },
  changeCity:function(event){

    this.setState({
      city:event.target.value,
      likedPlaces:[],
      places:[]
    });

  },
  changeView:function(e){
    var view = e.target.value;
    this.setState({
      view:view
    });
    if(view === 'all'){
    this.fetchPlaces();

    } else {
      this.scheduledPlaces();
    }
  },
  getStart:function(e){
    var {dispatch} = this.props;
      this.setState({
        date:e.target.value
      })
    dispatch(actions.trip('',this.state.cities,e.target.value,''));

  },
  getEnd:function(e){
    if(this.props.state.trip.selectedTrip.start){
    var {dispatch} = this.props;
    dispatch(actions.trip('',this.state.cities,this.state.date,e.target.value));
    window.location.reload()
  }
  },

  render: function () {
      var count = 1;
      return (
      <div>
      <div className="row">
      <Header home={false}/>
      <LeftPanel image={"/images/explore.png"}>
      <Explore loading={this.state.loadingExplore} retrievePlaces={this.retrievePlaces} city={this.state.city} cities={this.state.cities} places={this.state.places} fetchPlaces={this.fetchPlaces} />
      </LeftPanel>
      <div id='city-container'>
        <select onChange={this.changeCity} style={{marginRight:'10px'}} id="city">
             <option>Select City</option>
              {this.state.cities.map((x) => {
                count++;
                if(this.state.city === x.name +","+x.state+","+x.country){
                  return <option key={x}  selected value={x.name+", "+x.state} id ='city{count}'>{x.name+", "+x.state}</option>
                } else {
                  return <option key={x} value={x.name+", "+x.state} id ='city{count}'>{x.name+", "+x.state}</option>
                }

                })}
          </select>
         <select onChange={this.changeView} value={this.state.view} id="city">
             <option value="all">View All</option>
            <option value="day">View Day</option>
          </select>
      </div>
      <RightPanel image={"/images/planner.png"}>
      <SidePlanner getEnd={this.getEnd} getStart={this.getStart} selectedDates = {this.state.selectedDates}  tripId={this.props.state.trip.selectedTrip.id} userId={this.props.state.login.user} changeOrder={this.updateOrder} cards={this.state.cards} date={this.state.date} select={this.select} end={this.props.state.trip.selectedTrip.end} start={this.props.state.trip.selectedTrip.start}/>
      </RightPanel>
      <MapaContainer loaded={this.state.loaded} location={this.state.location} schedulePlace={this.schedulingPlace} date={this.state.date} places={this.state.likedPlaces}/>
      </div>
      </div>
    );

  }
});

const mapStateToProps = (state) => {
  return {
  state: state
}};

export default connect(mapStateToProps)(Planner);

