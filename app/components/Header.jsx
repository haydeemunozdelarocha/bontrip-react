var React = require('react');
var Navigation = require('Navigation');
var {Link, IndexLink} = require('react-router');
var {RaisedButton} = require('material-ui');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var styles=require('Styles');
var {browserHistory} = require('react-router');
var {connect} = require('react-redux');
import $ from 'jquery';

import 'foundation-sites';


const headerStyle={
  backgroundColor:'#5694f7',
  color:'white',
  paddingRight:'2%',
  paddingLeft:'2%'
}

const redButton ={
  backgroundColor:'#e5500b',
  color:'white',
  marginRight:'2%',
  borderRadius: 25,
  overflow:'hidden'

}

const logo ={
  fontFamily:'Verdana',
  color:'white'
};


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
        if(this.props.home){
        headerStyle.backgroundColor = 'rgba(0,0,0,0)';
        }
      return <button style={{marginTop:'10px',minWidth:'90px',fontSize:'16px',fontFamily: 'Dosis',float:'right',border:'solid 2px #ffffff',borderRadius:'5px',backgroundColor:'rgba(0,0,0,0)',color:'#fff',textTransform:'uppercase',fontWeight:'700'}} className="button" type="button" onClick={()=>{ browserHistory.push({pathname: '/login'});}}>Login</button>;

      }
    },
  render: function () {
    return (
      <div>


<div className="top-bar" style={headerStyle}>
 <div className="top-bar-left">
    <a style={logo} href="/"><img src={'/images/bontrip-logo-white.png'}/></a>
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
