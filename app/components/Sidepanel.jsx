import React from 'react';
import { connect } from 'react-redux';

class Sidepanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  togglePanel() {
    const _this = this;
    _this.setState({open: !_this.state.open});
  }

  render() {
    return (
      <div className={`sidepanel sidepanel-${this.props.orientation} ${this.state.open ? 'is-open' : 'is-closed'}`} style={{backgroundColor: this.props.color || '#2144b7'}}>
        <div className="sidepanel-content">
          {this.props.children}
        </div>
        <div className="sidepanel-tab" onClick={this.togglePanel.bind(this)} style={{top: `${this.props.index * 70}px`, backgroundColor: this.props.color || '#2144b7'}}>
          <img className="sidepanel-tab-image" src={this.props.image} />
        </div>
      </div>
    );
  }
}


export default connect(null)(Sidepanel);
