var React = require('react');
var {browserHistory} = require('react-router');
var CheckUser = require('../api/CheckUser');
import Header from './Header';
var { connect } = require('react-redux');
var actions = require('../actions/actions');


export var Signup = React.createClass({

  getInitialState: function (){
    return {
      user: true,
      buttonOff:true
     }
  },
    signUp: function (){
    var that = this;
    var {dispatch} = that.props;
     var username = that.refs.username.value;
     var password = that.refs.password.value;
    CheckUser.signupUser(username,password).then(function(res){
      if(res.data.message){
          alert('ERROR: '+res.data.name+'\n '+res.data.message);
          that.refs.password.value = '';
          that.refs.username.value = '';
      } else {
        that.setState({user:res.data._id});
        dispatch(actions.login(res.data._id));
        browserHistory.push({pathname: '/trips'});
      }

    }, function(errorMessage){
      that.refs.password.value = '';
      that.refs.username.value = '';
      return console.log(errorMessage);
    })
  },
  render: function () {
      return (
      <div className="login-container">
        <Header buttonOff = {this.state.buttonOff} loggedIn={this.state.user}/>
        <div className="login-form-container">
        <form onSubmit={this.login}>
          <input placeholder="username" className="round-input" type="text" ref="username"/>
          <input placeholder="password" className="round-input" type="password" ref="password"/>
          <input placeholder="confirm password" className="round-input" type="password" ref="password"/>
          <button className="red-button button" type="button" onClick={()=>{this.signUp()}}>Sign Up</button>
        </form>
        </div>
      </div>
    );

  }
});



export default connect(null)(Signup);
