var React = require('react');
var {browserHistory} = require('react-router');
var Navigation = require('Navigation');
var CheckUser = require('CheckUser');
import Header from 'Header';
var {connect} = require('react-redux');
var actions = require('Actions');

const inputStyle ={
  borderRadius:'25px'
};

export var Login = React.createClass({

    getInitialState: function (){
      console.log('getting initial state')
    return {
      user: {},
      buttonOff:true
     }
  },
  componentDidMount: function() {
    this.checkUser();
  },
  checkUser: function (){
    var that = this;
    var {dispatch} = that.props;
    CheckUser.checkUser().then(function(res){
      if(!res.data._id){
       that.setState({user:false});
        console.log('no user');
      } else if(res.data._id){
        dispatch(actions.login(res.data._id));
      browserHistory.push({pathname: '/trips'});
      }
    }, function(errorMessage){
      return  console.log(errorMessage);
    })
  },
    login: function (){
      console.log('logging in')
    var that = this;
    var {dispatch} = that.props;
     var username = that.refs.username.value;
     var password = that.refs.password.value;
    CheckUser.loginUser(username,password).then(function(res){
      console.log(res.data);
      that.setState({user:true});
     dispatch(actions.login(res.data._id));
      browserHistory.push({pathname: '/trips'});

    }, function(errorMessage){
      that.refs.password.value = '';
      that.refs.username.value = '';
         return console.log(errorMessage);
    })
  },
  render: function () {
      return (
      <div style={{backgroundColor:"#eaf9f9",height:'100vh',width:'100%',overflow:'hidden'}}>
      <Header home={false} loggedIn = {true} />
        <div style={{width:'100%',height:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <form onSubmit={this.login} style={{width:'30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <input placeholder="username" style={inputStyle} type="text" ref="username"/>
          <input placeholder="password" style={inputStyle} type="password" ref="password"/>
          <button style={{marginTop:'10px',borderRadius:'5px',fontFamily:'Dosis',fontWeight:'700',fontSize:'16px',textTransform:'uppercase',float:'right',backgroundColor:'#e5500b',color:'#fff'}} className="button" type="button" onClick={()=>{this.login()}}>Login</button>

          <a href="/signup" style={{marginTop:'10%'}}>Start planning your trip! Click to register</a>
        </form>
        </div>
      </div>
    );

  }
});



export default connect(null)(Login);
