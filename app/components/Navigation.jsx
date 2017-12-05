var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
          <li className="menu-text">
            BonTrip
          </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/explore" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Explore</Link>
            </li>
            <li>
              <Link to="/planner" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Planner</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
        <ul className="menu">
          <li><input type="search" placeholder="Search"/></li>
          <li><button type="button" id="search" onClick={()=>{console.log('searching')}} className="button">Search</button></li>
        </ul>
        </form>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
