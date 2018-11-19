import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Header from './Header';
import CityAutocomplete from './CityAutocomplete';
import Slideshow from './Slideshow';
import * as images from '../slideshow.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.clearSelectedTrip();
  }

  clearSelectedTrip() {
    const { dispatch } = this.props;
    dispatch(actions.clearSelectedTrip());
  }

  render() {
    return (
      <div className="cover-page-layout">
        <Header />
        <Slideshow fullscreen={true} images={images.home}/>
        <div className="l-page-overlay">
          <CityAutocomplete />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Home);
