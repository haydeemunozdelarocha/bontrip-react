import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'slick-carousel';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions();

    this.state = {
      height: $(window).height(),
      width: $(window).width(),
    };
  }

  componentDidMount() {
    $('[data-slideshow]').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      draggable: false,
      fade: true,
      speed: 1000,
      arrows: false
    });
  }

  switchImage() {
    let count = this.state.count;
    let updatedCount = count < 5 ? count + 1 : 0;
    this.setState({ count: updatedCount }, () => setTimeout(this.switchImage.bind(this), 5000));
  }

  updateDimensions() {
    const currentWindowWidth = $(window).width();
    const currentWindowHeight = $(window).height();

    $('.slideshow').css('width', currentWindowWidth).css('height', currentWindowHeight);
  }

  render() {
    let { images } = this.props;

    return (
      <ul className="slideshow" data-slideshow>
        { images.map((image, i) => {
          return <li className="slideshow-item" key={i} style={{backgroundImage: `url(${image})`}}></li>;
        })}
      </ul>
    );
  }
}

export default connect(null)(Slideshow);
