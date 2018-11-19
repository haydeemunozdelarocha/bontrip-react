import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from "react-redux";

export const Navigation = React.createClass({
  render: function() {
    let link;
    let caption;
    if (!this.props.user.length > 0) {
      link = "/login";
      caption = "Login";
    } else {
      link = "/logout";
      caption = "Logout";
    }
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
              <Link to={link} activeClassName="active" style={{color:'#0d1228'}} activeStyle={{color:'#0d1228',textDecoration:'underline'}}>{caption}</Link>
            </li>
          </ul>
    );
  }
});

export default connect(null)(Navigation);
