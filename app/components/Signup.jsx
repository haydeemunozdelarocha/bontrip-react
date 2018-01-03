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

export var Signup = React.createClass({

    getInitialState: function (){
      console.log('getting initial state')
    return {
      user: true,
      buttonOff:true
     }
  },
    signUp: function (){
      console.log('logging in')
    var that = this;
    var {dispatch} = that.props;
     var username = that.refs.username.value;
     var password = that.refs.password.value;
    CheckUser.signupUser(username,password).then(function(res){
      console.log(res.data);
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
      <div style={{backgroundColor:"#eaf9f9",height:'100vh',width:'100%'}}>
            <Header buttonOff = {this.state.buttonOff} loggedIn={this.state.user}/>
        <div style={{width:'100%',height:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <form onSubmit={this.login} style={{width:'30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <input placeholder="username" style={inputStyle} type="text" ref="username"/>
          <input placeholder="password" style={inputStyle} type="password" ref="password"/>
          <input placeholder="confirm password" style={inputStyle} type="password" ref="password"/>
          <button style={{marginTop:'10px',float:'right',backgroundColor:'#e5500b',color:'#fff'}} className="button" type="button" onClick={()=>{this.signUp()}}>Sign Up</button>

        </form>
        </div>
      </div>
    );

  }
});



export default connect(null)(Signup);
