var React = require('react');
var GetPlaces = require('GetPlaces');
var {RaisedButton} = require('material-ui');
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
const heartStyle={
  zIndex:9,
  position:'absolute',
  top:'8%',
  right:'8%'
}

var ExploreCard = React.createClass({
  getInitialState: function () {
      return {liked: false};
    },
 handleMore: function (e){
    var id = this.props.place_id;
    // console.log('handleMore',this.props);
    this.props.viewPlace(id);
  },
  handleLike: function (e){
    var place = {venueId:this.props.place_id,
                  source:'fs',
                  user_id:this.state._id,
                  category:this.props.category};
    this.addPlace(place);

  },
  addPlace: function(place){
    console.log('adding place explore');
    var that = this;
    GetPlaces.addPlace(place).then(function(res){
      console.log(res);
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
    <div className="panel callout">
    <img style={heartStyle} onClick={()=>{this.handleLike()}} key="heart{place_id}" className="heart" height="30px" width="30px" src={imageSource} />
        <img src={this.props.photo} />
        <p>{name}</p>
           <MuiThemeProvider muiTheme={getMuiTheme()}>
           <RaisedButton
      label="More"
      buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}
      labelColor={'#FFFFFF'}
      backgroundColor={'#e5500b'}
      onClick={()=>{this.handleMore()}}
    />
   </MuiThemeProvider>
      </div>
    </div>
    )
  }
});

module.exports = ExploreCard;
