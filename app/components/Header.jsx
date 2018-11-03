import React from 'react';
import Navigation from './Navigation';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export const Header = React.createClass({
  showNavigation: function() {
    if (this.props.navigation) {
      return <Navigation user={this.props.state.login.user}/>
    }
    if (!this.props.loggedIn) {
      return <button className="white-button button" type="button" onClick={()=>{ browserHistory.push({pathname: '/login'});}}>Login</button>;
    }
  },
  render: function() {
    let image;
    let color;
    if (this.props.isHomePage) {
      image = '/images/bontrip-logo-white.png';
      color = 'rgba(0,0,0,0)'
    } else {
      image = '/images/bontrip-logo-blue.png';
      color = '#fff';
    }

    return (
      <div className={`theme-header top-bar ${this.props.isHomePage ? 'is-transparent' : ''}`}>
        <div>
          <a className="logo" href="/"><img src={image}/></a>
        </div>
        <div>
          {this.showNavigation()}
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Header);
