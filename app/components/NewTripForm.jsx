import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import moment from 'moment';
import {store} from "../app";
import { isInclusivelyAfterDay, DateRangePicker } from 'react-dates';

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment(new Date()),
      start: moment(props.state.trip.selectedTrip.start) || today,
      end: moment(props.state.trip.selectedTrip.end) || null,
      focused: false
    };
  }

  setTripDates(dates) {
    let { startDate, endDate } = dates;
    let start_date_string = startDate.format('YYYY-MM-DD');
    let end_date_string = endDate.format('YYYY-MM-DD');

    store.dispatch(actions.addStart(null, start_date_string));
    store.dispatch(actions.addEnd(null, end_date_string));

    this.setState({start: startDate, end: endDate});
  }

  render() {
    return (
      <div>
        <p>Select dates:</p>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.start}
          endDate={this.state.end}
          onDatesChange={(dates) => this.setTripDates(dates)}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          numberOfMonths={1}
          isOutsideRange={(day) => !isInclusivelyAfterDay(day, moment()) }
          initialVisibleMonth={() => this.state.start}
        />
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
