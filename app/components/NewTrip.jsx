var React = require('react');
var {browserHistory} = require('react-router');
import Header from 'Header';
var {AutoComplete,RaisedButton,DatePicker,Chip} = require('material-ui');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var GetPlaces = require('GetPlaces');
var {connect} = require('react-redux');
var actions = require('Actions');


const searchContainer ={
  width:'100%',
  height:'87vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
};
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
      cities:[]
     }
  },
  componentDidMount: function() {

  },
  saveTrip:function(){

  },
    handleChange:function(input){
    console.log('handling');
    var that = this;
    console.log(that.state.citiesData);


    GetPlaces.getGoogleCities(input).then(function(res){
          that.setState({citiesData:res.data});
    }, function(errorMessage){

      return   console.log(errorMessage);
    })
  },
  handleNewRequest:function(text){
    var cities =[];
    cities.push(text.text);
    this.refs.city.state.searchText ='';
    this.setState({citiesData:[],cities:cities});

  },
  handleRequestDelete:function(chip){
    var cities = this.state.cities;
    cities.splice(chip, 1);
    this.setState({cities:cities});

  },
  uploadFile:function(){

  },
  render: function () {
    var count = 0;
      return (
      <div style={{backgroundColor:"#eaf9f9",overflow:'hidden',height:'100vh',width:'100%'}}>
      <Header/>
        <div style={{width:'100%',height:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <div style={{width:'30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <input placeholder="Trip Name"  type="text" ref="name"/>
          <label style={{alignSelf:'end'}}>Start:</label>
          <input type="date" ref="start"/>
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
            {this.state.cities.map((x,index) => {
              return   <MuiThemeProvider muiTheme={getMuiTheme()}><Chip
          onRequestDelete={this.handleRequestDelete.bind(this,index)}
          style={chipStyle}
          id={index}
        >{x}</Chip></MuiThemeProvider>;

            })}
            <label style={{marginTop:'10px',backgroundColor:'#5694f7',color:'#fff'}} className="button">Upload Photo</label>
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
