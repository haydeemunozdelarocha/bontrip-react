import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../actions/actions';
import Header from './Header';
import CityAutocomplete from './CityAutocomplete';
import Slideshow from './Slideshow';
import * as images from '../slideshow.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.clearSelectedTrip();

    this.state = {
      loading: true,
      buttonOff: false,
      citiesData: [],
    };
  }

  clearSelectedTrip() {
    const { dispatch } = this.props;
    dispatch(actions.clearSelectedTrip());
  }

  componentDidMount() {
    this.checkUser();
  }

  checkUser() {
    if (this.props.state.login.user) {
      return browserHistory.push({pathname: '/trips'});
    }
  }

  render() {
    return (
      <div className="cover-page-layout">
        <Header isHomePage={true} loggedIn={false} buttonOff = {this.state.buttonOff} />
        <Slideshow fullscreen={true} images={images.home}/>
        <div className="l-page-overlay">
          <CityAutocomplete />
        </div>
        <div>
          <div className="diagonal-line"></div>
          <div className="diagonal-line"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Home);
