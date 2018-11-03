import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import moment from 'moment';

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    let today = moment(new Date()).format('YYYY-MM-DD');
    this.state = {
      today: today,
      start: today,
      end: null
    };
  }

  setTripStart(e) {
    let { dispatch } = this.props;
    let start_date = moment(e.target.value).format('MM-DD-YYYY');
    this.setState({
      start: start_date
    });
    dispatch(actions.addStart(null, start_date));
  }

  setTripEnd(e) {
    const _this = this;
    let { dispatch } = _this.props;
    let end_date = moment(e.target.value).format('MM-DD-YYYY');

    if (_this.state.start < end_date) {
      _this.setState({
        end: end_date
      });
      dispatch(actions.addEnd(null, end_date));

    } else {
      _this.refs.enddate.value = '';
      alert('Please select a start date before the end date.');
    }
  }

  render() {
    return (
      <div>
        <p>Select dates:</p>
        <input type="date" ref="startdate" min={this.state.today} onChange={this.setTripStart}/>
        <input type="date" ref="enddate" min={this.state.start} onChange={this.setTripEnd}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(NewTripForm);
