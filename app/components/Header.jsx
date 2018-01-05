var React = require('react');
var Navigation = require('Navigation');
var {Link, IndexLink} = require('react-router');
var {RaisedButton} = require('material-ui');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var {browserHistory} = require('react-router');
var {connect} = require('react-redux');
import $ from 'jquery';
import 'Sass';

import 'foundation-sites';


export var Header = React.createClass({
    componentDidMount:function(){
      $(document).foundation();
    },
    loginButton:function(){

      if(this.props.state.login.user.length>0){
        return <Navigation type="menu"/>
      }
      else if(this.props.loggedIn){
        return;
      }
      else if(!this.props.loggedIn){
      return <button className="white-button button" type="button" onClick={()=>{ browserHistory.push({pathname: '/login'});}}>Login</button>;

      }
    },
  render: function () {

    if(this.props.home){
      var image = '/images/bontrip-logo-white.png';
      var color = 'rgba(0,0,0,0)'
    } else {
      var image = '/images/bontrip-logo-blue.png';
      var color = '#eaf9f9';
    }

    const headerStyle={
      backgroundColor:color
    }

    return (
      <div>


<div id="header" className="top-bar" style={headerStyle}>
 <div className="top-bar-left">
    <a id="logo" href="/"><img src={image}/></a>
  </div>
  <div className="top-bar-right">
    {this.loginButton()}
  </div>
</div>
</div>
    );
  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Header);
