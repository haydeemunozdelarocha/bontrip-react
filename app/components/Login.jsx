var React = require('react');
var {browserHistory} = require('react-router');
var Navigation = require('Navigation');
var CheckUser = require('CheckUser');

var Login = React.createClass({

    getInitialState: function (){
      console.log('getting initial state')
    return {
      user: {}
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
    login: function (){
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
      <div>
        <form onSubmit={this.login}>
          <input type="text" ref="username"/>
          <input type="text" ref="password"/>
          <button className="button">Login</button>
        </form>
      </div>
    );

  }
});



module.exports = Login;
