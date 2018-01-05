var React = require('react');
var {browserHistory} = require('react-router');
var Navigation = require('Navigation');
var CheckUser = require('CheckUser');
var {connect} = require('react-redux');
var actions = require('Actions');
import Header from 'Header';
import 'Sass';


export var Login = React.createClass({
    getInitialState: function (){
    return {
      user: {},
      buttonOff:true
     }
  },
  componentDidMount: function() {
    this.checkUser();
  },
  checkUser: function(){
    console.log('checking user')
    var that = this;
    var {dispatch} = that.props;
    CheckUser.checkUser().then(function(res){
      if(!res.data._id){
       that.setState({user:false});
      } else if(res.data._id){
        dispatch(actions.login(res.data._id));
        browserHistory.push({pathname: '/trips'});
      }
    }, function(errorMessage){
      return  console.log(errorMessage);
    })
  },
    login: function (){
    var that = this;
    var {dispatch} = that.props;
     var username = that.refs.username.value;
     var password = that.refs.password.value;
    CheckUser.loginUser(username,password).then(function(res){
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
      <div className="login-container">
      <Header home={false} loggedIn = {true} />
        <div className="login-form-container">
        <form onSubmit={this.login}>
          <input placeholder="username" className="round-input" type="text" ref="username"/>
          <input placeholder="password" className="round-input" type="password" ref="password"/>
          <button className="red-button button" type="button" onClick={()=>{this.login()}}>Login</button>
          <a href="/signup">Start planning your trip! Click to register</a>
        </form>
        </div>
      </div>
    );
  }
});



export default connect(null)(Login);
