var React = require('react');
var Navigation = require('Navigation');
var {Link, IndexLink} = require('react-router');
var {RaisedButton} = require('material-ui');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var styles=require('Styles');
var {browserHistory} = require('react-router');
var {connect} = require('react-redux');


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

    loginButton:function(){
      if(this.props.state.login.user){
                return <Navigation/>
      }
      else if(!this.props.buttonOff){
      return <MuiThemeProvider muiTheme={getMuiTheme()}>
           <RaisedButton
      label="Login"
      buttonStyle={{ borderRadius: 25}}
      style={{ borderRadius: 25,backgroundColor:'none' }}
      labelColor={'#FFFFFF'}
      backgroundColor={'#e5500b'}
      onClick={()=>{ browserHistory.push({pathname: '/login'});
}}
    />
    </MuiThemeProvider>;
      }
    },
  render: function () {
    return (
      <div className="top-bar" style={headerStyle}>
        <div className="top-bar-left">
        <a style={logo} href="/"><h3>bontrip</h3></a>
        </div>
        <div className="top-bar-right">
            {this.loginButton()}
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Header);
