var React = require('react');
var GetPlaces = require('GetPlaces');
var actions = require('Actions');
var {connect} = require('react-redux');
import 'Sass';


export var ExploreCard = React.createClass({
  getInitialState: function () {
      return {liked: false};
    },
 handleMore: function (e){
    var id = this.props.place_id;
    this.props.viewPlace(id);
  },
  handleLike: function (e){
    var place = {venueId:this.props.place_id,
                  source:'fs',
                  user_id:this.props.state.login.user,
                  tripId:this.props.state.trip.selectedTrip.id,
                  category:this.props.category,
                  image:this.props.photo,
                  coordinates:{lat:this.props.lat,
                  lon:this.props.lng},
                  name:this.props.name};
    this.addPlace(place);

  },
  addPlace: function(place){
    var that = this;
      if(this.props.state.login.user.length >0){
      GetPlaces.addPlace(place).then(function(res){
        if(res.data._id){
          that.props.fetchPlaces();
        }

      }, function(errorMessage){
           console.log(errorMessage);
      })
    } else{
      // this.setState({liked:true})
      var {dispatch} = that.props;
      dispatch(actions.likedPlaces(place));
    }
  },
  render: function () {

  var {name,place_id,photo,category,selected} = this.props;
  if(this.state.liked){
      var likeIcon = <i style={{color:'white'}} className="fa fa-check" aria-hidden="true"></i>;
  } else {
      var likeIcon = '+';
  }
    return (
    <div className="explore-card" >
        <img src={this.props.photo} />
        <div className="venue-name">
        <a onClick={()=>{this.handleMore()}}>{name}</a>
        <p onClick={()=>{this.handleLike()}}>{likeIcon}</p>
        </div>
      </div>
    )
  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(ExploreCard);
