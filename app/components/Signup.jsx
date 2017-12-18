var React = require('react');
var {browserHistory} = require('react-router');
var Navigation = require('Navigation');
var CheckUser = require('CheckUser');
var Header = require('Header');
var {RaisedButton} = require('material-ui');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const inputStyle ={
  borderRadius:'25px'
};

var Signup = React.createClass({

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
    CheckUser.checkUser().then(function(res){
      that.setState({
        user: res
      })
      console.log(res);
      if(!res.data.user){
        console.log('no user');
      } else if(res.data.user){
        console.log(res.username)
    browserHistory.push('/home');
      }
    }, function(errorMessage){
      that.setState({
        user:{}
      })
      return  alert(errorMessage);
    })
  },
    signup: function (){
      console.log('logging in')
    var that = this;
     var username = that.refs.username.value;
     var password = that.refs.password.value;
    CheckUser.loginUser(username,password).then(function(res){
      that.setState({
        user: res.data._id
      })
          browserHistory.push('/home');

    }, function(errorMessage){
      that.refs.password.value = '';
      that.refs.password.value = '';
      that.setState({
        user:{}
      })
         return alert(errorMessage);
    })
  },
  render: function () {
      return (
      <div style={{backgroundColor:"#eaf9f9",height:'100vh',width:'100%'}}>
            <Header buttonOff = {this.state.buttonOff} loggedIn={this.state.user}/>
        <div style={{width:'100%',height:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <form onSubmit={this.login} style={{width:'30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <input placeholder="username" style={inputStyle} type="text" ref="username"/>
          <input placeholder="password" style={inputStyle} type="text" ref="password"/>
          <input placeholder="confirm password" style={inputStyle} type="text" ref="password"/>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
           <RaisedButton
              label="Signup"
              buttonStyle={{ borderRadius: 25}}
              style={{ borderRadius: 25,backgroundColor:'none' }}
              labelColor={'#FFFFFF'}
              backgroundColor={'#e5500b'}
              onClick={()=>{this.handleMore()}}
            />
            </MuiThemeProvider>

        </form>
        </div>
      </div>
    );

  }
});



module.exports = Signup;
