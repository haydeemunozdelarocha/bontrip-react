import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CityAutocomplete from '../../components/CityAutocomplete/CityAutocomplete';
import Slideshow from '../../components/Slideshow/Slideshow';

const images = require("../../slideshow.json");

class Home extends React.Component<{}> {

  render() {
    return (
      <div className="cover-page-layout">
        <Header isTransparent={true}/>
        <Slideshow isFullscreen={true} images={images.home}/>
        <div className="l-page-overlay">
          <CityAutocomplete animatedPlaceholderWords={["Tokyo", "Paris", "Munich", "Hong Kong", "Mexico City", "Sao Paolo", "Beijing", "Madrid"]}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Home);
