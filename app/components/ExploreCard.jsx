var React = require('react');
var GetPlaces = require('GetPlaces');
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
                  lat:this.props.lat,
                  lng:this.props.lng,
                  name:this.props.name};
    this.addPlace(place);

  },
  addPlace: function(place){
    var that = this;
    GetPlaces.addPlace(place).then(function(res){
      if(res.data._id){
        that.setState({liked: !that.state.liked});
      }

    }, function(errorMessage){
         console.log(errorMessage);
    })
  },
  render: function () {

  var {name,place_id,photo,category,selected} = this.props;

  var imageSource = this.state.liked ? '/images/heart2.png' : '/images/heart.png';
    return (

    <div className="large-4 columns">
    <div className="panel callout explore-card" >
    <img onClick={()=>{this.handleLike()}} key="heart{place_id}" className="heart" height="30px" width="30px" src={imageSource} />
        <img src={this.props.photo} />
        <p className="venue-name">{name}</p>
        <button className="red-button button" type="button" onClick={()=>{this.handleMore()}}>More</button>
      </div>
    </div>
    )
  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(ExploreCard);
