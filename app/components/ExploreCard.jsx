var React = require('react');
var GetPlaces = require('GetPlaces');




var ExploreCard = React.createClass({

  render: function () {

    var {name,place_id,photo} = this.props;

    return (
    <div className="large-4 columns">
    <div className="panel callout">
    <div className="exploreCardTop">
    <img src="../images/heart.png" />
      <p>{name}</p>
      </div>
        <img src={this.props.photo} />
        <button className="button" onClick={this.props.handleMore}>More</button>
      </div>
    </div>
    )
  }
});

module.exports = ExploreCard;
