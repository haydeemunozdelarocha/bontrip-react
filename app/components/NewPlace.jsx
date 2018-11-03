var React = require('react');
import Header from './Header';
var GetPlaces = require('../api/GetPlaces');
var {connect} = require('react-redux');


const inputStyle ={
  borderRadius:'25px'
};

export var NewPlace = React.createClass({

    getInitialState: function (){
    return {
      user: {},
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
    this.setState({citiesData:[],cities:cities});

  },
  handleRequestDelete:function(chip){
    var cities = this.state.cities;
    cities.splice(chip, 1);
    this.setState({cities:cities});

  },
  render: function () {
    var count = 0;
      return (
      <div style={{backgroundColor:"#eaf9f9",height:'100vh',width:'100%'}}>
      <Header loggedIn={this.state.user}/>
        <div style={{width:'100%',height:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <div style={{width:'30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <input placeholder="Name" style={inputStyle} type="text" ref="name"/>
          <input placeholder="Address" style={inputStyle} type="text" ref="address"/>
          <input placeholder="Description" style={inputStyle} type="text" ref="description"/>
          <select style={inputStyle} >
          <option value=''>Category</option>
          <option value='outdoor'>Outdoor</option>
          <option value='retail'>Retail</option>
          <option value='museum'>Museum & Cultural</option>
          <option value='restaurant'>Restaurant</option>
          </select>
        <button style={{marginTop:'10px',float:'right',backgroundColor:'#e5500b',color:'#fff'}} className="button" type="button" onClick={()=>{this.saveTrip}}>Select</button>

        </div>
        </div>
      </div>
    );

  }
});


const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(NewPlace);
