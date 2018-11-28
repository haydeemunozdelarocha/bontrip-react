import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.isHomePage);
    return (
      <div className={`theme-header ${this.props.isHomePage ? 'is-transparent' : ''}`}>
        <div><a className="logo" href="/"><img src={`${this.props.isHomePage ? '/images/bontrip-logo-white.png' : '/images/bontrip-logo-blue.png'}`}/></a></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Header);
