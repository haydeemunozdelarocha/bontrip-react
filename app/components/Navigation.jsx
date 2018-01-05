var React = require('react');
var {Link, IndexLink} = require('react-router');
import 'Sass';


var Navigation = React.createClass({
  render: function () {
    return (
          <ul className={this.props.type} id="menu">
            <li>
              <IndexLink to="/" activeClassName="active" style={{color:'#0d1228'}} activeStyle={{color:'#0d1228',textDecoration:'underline'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/explore" activeClassName="active" style={{color:'#0d1228'}} activeStyle={{color:'#0d1228',textDecoration:'underline'}}>Explore</Link>
            </li>
            <li>
              <Link to="/planner" activeClassName="active" style={{color:'#0d1228'}} activeStyle={{color:'#0d1228',textDecoration:'underline'}}>Planner</Link>
            </li>
            <li>
              <Link to="/logout" activeClassName="active" style={{color:'#0d1228'}} activeStyle={{color:'#0d1228',textDecoration:'underline'}}>Logout</Link>
            </li>
          </ul>
    );
  }
});

module.exports = Navigation;
