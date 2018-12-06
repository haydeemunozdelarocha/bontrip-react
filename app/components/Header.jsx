import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../public/images/bontrip.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`theme-header ${this.props.isHomePage ? 'is-transparent' : ''}`}>
        <a className="logo" href="/"><Logo /></a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Header);
