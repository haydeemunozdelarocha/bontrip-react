import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import moment from 'moment';
import {store} from "../app";

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    let today = moment(new Date()).format('YYYY-MM-DD');

    this.state = {
      today: today,
      start: props.state.trip.selectedTrip.start || today,
      end: props.state.trip.selectedTrip.end || null
    };
  }

  setTripStart(e) {
    let start_date = moment(e.target.value).format('YYYY-MM-DD');
    store.dispatch(actions.addStart(null, start_date));
  }

  setTripEnd(e) {
    const _this = this;
    let end_date = moment(e.target.value).format('YYYY-MM-DD');

    if (_this.state.start < end_date) {
      store.dispatch(actions.addEnd(null, end_date));

    } else {
      _this.refs.enddate.value = '';
      alert('Please select a start date before the end date.');
    }
  }

  render() {
    return (
      <div>
        <p>Select dates:</p>
        <input type="date" ref="startdate" min={this.state.today} defaultValue={this.state.start} onChange={this.setTripStart}/>
        <input type="date" ref="enddate" min={this.state.start} defaultValue={this.state.end} onChange={this.setTripEnd.bind(this)}/>
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
