var React = require('react');
var {Link, IndexLink} = require('react-router');

const navStyle = {
  backgroundColor:'#5694f7',
  color:'white'
};

var Navigation = React.createClass({
  render: function () {
    return (
          <ul className="menu" style={navStyle}>
            <li>
              <IndexLink to="/" activeClassName="active" style={{color:'white'}} activeStyle={{fontWeight:'bold',color:'white'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/explore" activeClassName="active" style={{color:'white'}} activeStyle={{fontWeight:'bold',color:'white'}}>Explore</Link>
            </li>
            <li>
              <Link to="/planner" activeClassName="active" style={{color:'white'}} activeStyle={{fontWeight:'bold',color:'white'}}>Planner</Link>
            </li>
            <li>
              <Link to="/logout" activeClassName="active" style={{color:'white'}} activeStyle={{fontWeight:'bold',color:'white'}}>Logout</Link>
            </li>
          </ul>
    );
  }
});

module.exports = Navigation;
