var React = require('react');
var {connect} = require('react-redux');
import {AutoComplete} from 'material-ui';
import Header from 'Header';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import 'Sass';

var {browserHistory} = require('react-router');
var GetPlaces = require('GetPlaces');
var actions = require('Actions');
var moment = require('moment');
var $ = require('jquery');



const images = [
"/images/paris.jpg","/images/sardinia.jpg","/images/iceland.jpg","/images/madrid.jpg","/images/tokyo.jpg","/images/patagonia.jpg"
];

var count = 0;

export var Home = React.createClass({

 getInitialState: function (){
      var {dispatch} = this.props;
     dispatch(actions.logout());
   var height = $(window).height();
   var width = $(window).width();
    return {
      loading: true,
      buttonOff:false,
      citiesData:[],
      height:height,
      width:width,
      imageMargin:'auto',
      searchBarWidth:'30%'
     }
  },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount:function(){
    window.addEventListener("resize", this.updateDimensions);
    this.switchImage();
    this.checkUser();

  },
    checkUser: function (){
    if(this.props.state.login.user.length >0){
      browserHistory.push({pathname: '/trips'});
    } else {
      return;
    }
  },
  switchImage:function(){
      if(count < 5){
      count++;
      } else {
        count = 0;
      }
      this.refs.background.src = images[count];
     setTimeout(function() { this.switchImage() }.bind(this), 5000);
  },
  handleChange:function(input){
    var that = this;

    GetPlaces.getGoogleCities(input).then(function(res){
          that.setState({citiesData:res.data});
    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  },
  handleNewRequest:function(text){
    var cities =[];
    cities.push(text.text);
    this.setState({cities:cities});
    var {dispatch} = this.props;
    dispatch(actions.trip('',cities,moment(new Date()).format("YYYY-MM-DD"),''));
    browserHistory.push({pathname: '/planner'});
  },
    updateDimensions: function() {
      if($(window).width() <500){
        this.setState({
          width: 'auto',
          height: $(window).height(),
          imageMargin: "-255px",
          searchBarWidth:"100%",
          maxWidth:'1920px'
                  });
      } else if($(window).width() < 800 && $(window).width() > 500){
        this.setState({
          searchBarWidth:"90%"
        });
      } else {
       this.setState({
          width: $(window).width(),
          height: 'auto',
          imageMargin:"auto",
          maxWidth:$(window).width(),
          searchBarWidth:"60%",
        });
      }
    },
  render: function () {
      var screenHeight = this.state.height;
      var screenWidth = this.state.width;
      var searchBarWidth = this.state.searchBarWidth;


    const background = {
      width: $(window).width(),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex:'-9',
     position:'absolute',
      height:screenHeight,
      overflow:'hidden',
      top:'0'
    };

const backgroundImage = {
      height:screenHeight,
      width:screenWidth,
      marginLeft:this.state.imageMargin,
      maxWidth:this.state.maxWidth,
      left:'50%',
      minHeight:$(window).height()
    };

    const searchBar = {
      width:"50%",
      borderBottom:'solid 3px white',
      backgroundColor:'rgba(0,0,0,0)',
      overflow:'hidden',
      paddingLeft:'1%',
      paddingRight:'1%',
      color:'white',
      fontFamily:'Futura'
    };

    const searchContainer ={
      width:searchBarWidth,
      height:'87vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'auto'
    };
      return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={{width:'100%',height:'100vh',overflow:'hidden'}}>
      <Header home={true} loggedIn={false} buttonOff = {this.state.buttonOff} />
      <div style={background}>
            <img style={backgroundImage} ref="background" id="background" src={images[0]} />
      </div>
      <div id='home-search-container' style={searchContainer}>
      <AutoComplete id="search" ref="city"
      hintText="Where to?"
            id='search'
            underlineStyle={{display: 'none'}}
            searchText={this.state.city}
            dataSource    = {this.state.citiesData}
            onUpdateInput = {this.handleChange}
            style={searchBar}
            open={true}
            onNewRequest={this.handleNewRequest}
            dataSourceConfig={{ text: 'text', value: 'value'}}
            maxSearchResults={4}
            filter={AutoComplete.caseInsensitiveFilter}
            textFieldStyle={{color:'white',fontFamily:'Futura'}}
            menuStyle={{backgroundColor:'rgba(0,0,0,0)',fontFamily:'Futura'}}
            listStyle={{backgroundColor:'rgba(0,0,0,0)',fontFamily:'Futura'}}
    />
      </div>
      </div>
        </MuiThemeProvider>
    );

  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Home);
