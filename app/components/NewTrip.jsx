var React = require('react');
var {browserHistory} = require('react-router');
import Header from './Header';
var {AutoComplete, Chip} = require('material-ui');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var GetTrips = require('./api/getTrips');
var GetPlaces = require('./api/GetPlaces');
var {connect} = require('react-redux');
import 'aws-sdk/dist/aws-sdk';
const AWS = window.AWS;
var axios = require('axios');

const searchBar = {
  width:'100%',
  border:'none',
  opacity:'.9',
  backgroundColor:'white',
  overflow:'hidden',
  paddingLeft:'1%',
  paddingRight:'1%'
};

const chipStyle={
    margin: 4
  };

export var NewTrip = React.createClass({

    getInitialState: function (){
    return {
      citiesData:[],
      name:'',
      start:'',
      end:'',
      cities:[],
      photo:''
     }
  },

  saveTrip:function(){
    var trip={
      name:this.refs.name.value,
      start:this.refs.start.value,
      end:this.refs.end.value,
      cities:this.state.cities,
      photo:this.refs.photoLink.value,
      userId:this.props.state.login.user
    };
    console.log(trip);
    GetTrips.saveTrip(trip).then(function(res){
          console.log(res);
      browserHistory.push({pathname: '/trips'});

    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  },
    handleChange:function(input){
    console.log('handling');
    var that = this;

    GetPlaces.getGoogleCities(input).then(function(res){
          that.setState({citiesData:res.data});
    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  },
  handleNewRequest:function(value){
    console.log(value);
    var cities =this.state.cities;
    if(value.country === 'United States'){
    var city = value.city +','+value.province+','+value.country;
    } else {
     var city = value.city +','+value.country;
    }
    cities.push(city);
    this.refs.city.state.searchText ='';
    this.setState({citiesData:[],cities:cities});

  },
  handleRequestDelete:function(chip){
    var cities = this.state.cities;
    cities.splice(chip, 1);
    this.setState({cities:cities});

  },
  uploadPhoto:function(e){
    var photo = e.target.files[0];
    var that = this;
     console.log('uploadFile: ')



        var s3 = new AWS.S3();
        s3.config.update({
            accessKeyId: process.env.ACCESSKEY,
            secretAccessKey: process.env.SECRETACCESSKEY
        });

        var params = {
        Bucket: 'bontrip',
        Key: photo.name,
        Expires: 60,
        ContentType: photo.type
    };

    s3.getSignedUrl('putObject', params, function(err, signedUrl) {
        if (err) {
            console.log(err);
            return err;
        } else {
            console.log(signedUrl);

            var instance = axios.create();

            instance.put(signedUrl, photo, {headers: {'Content-Type': photo.type}})
                .then(function (result) {
                    console.log('https://bontrip.s3.amazonaws.com/'+result.config.data.name);
                    that.refs.photoLink.value='https://bontrip.s3.amazonaws.com/'+result.config.data.name;
                })
                .catch(function (err) {
                    console.log(err);
                });
            return signedUrl;
        }
    });
  },
  render: function () {
    var count = 0;
      return (
      <div style={{backgroundColor:"#eaf9f9",overflow:'scroll',height:'100vh',width:'100%'}}>
      <Header/>
        <div style={{width:'100%',height:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <div style={{width:'30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <input placeholder="Trip Name"  type="text" ref="name"/>
          <label style={{alignSelf:'end'}}>Start:</label>
          <input type="date" ref="start" />
          <label style={{alignSelf:'end'}}>End:</label>

          <input placeholder="end" type="date" ref="end"/>

             <MuiThemeProvider muiTheme={getMuiTheme()}>
                <AutoComplete ref="city"
              hintText="Where to?"
                    id='1'
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
            />
           </MuiThemeProvider>
           <div style={{display:'flex',width:'100%',flexWrap:'wrap'}}>
            {this.state.cities.map((x,index) => {
              return   <MuiThemeProvider muiTheme={getMuiTheme()}><Chip
          onRequestDelete={this.handleRequestDelete.bind(this,index)}
          style={chipStyle}
          id={index}
        >{x}</Chip></MuiThemeProvider>;

            })}
            </div>
            <input style={{marginTop:'10px'}} readOnly type="text" ref="photoLink" />
            <label htmlFor="uploadPhoto" style={{marginTop:'10px',backgroundColor:'#5694f7',color:'#fff'}} className="button">Upload Photo</label>
            <input type="file" onChange={this.uploadPhoto} id="uploadPhoto" className="show-for-sr"/>

        <button style={{marginTop:'10px',float:'right',backgroundColor:'#e5500b',color:'#fff'}} className="button" type="button" onClick={()=>{this.saveTrip()}}>Save</button>

        </div>
        </div>
      </div>
    );

  }
});



const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(NewTrip);
