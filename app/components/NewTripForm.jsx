import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import moment from 'moment';
import {store} from "../app";
import { DateRangePicker } from 'react-date-range';
import CityDraggableCardsList from "./CityDraggableCardsList";
const today = new Date();

let colors = [];

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  componentWillMount() {
    this.createCityDateRanges();
  }

  componentWillUpdate(prevProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.createCityDateRanges();
    }
  }

  createCityDateRanges() {
    const ranges = {};
    colors = [];
    this.props.cities.forEach((city) => {
      colors.push(city.color);
      ranges[city.id] = {
        startDate: city.startDate ? new Date(city.startDate) : new Date(),
        endDate:  city.endDate ? new Date(city.endDate) : new Date(),
        key: city.id,
        color: city.color
      };
      console.log('city', city);
    });
    console.log('colors', colors);
    this.setState(ranges);
  }

  setTripDates(startDate, endDate, id) {
    let start_date_string = moment(startDate).format('YYYY-MM-DD');
    let end_date_string = moment(endDate).format('YYYY-MM-DD');
    console.log('start_date_string', start_date_string);

    store.dispatch(actions.addDates(id, start_date_string, end_date_string));
  }


  handleRangeChange(item) {
    console.log('handling change', item);
    const id = item && Object.keys(item).length > 0 && Object.keys(item)[0];
    this.setTripDates(item[id].startDate, item[id].endDate, id);
    return this.setState({ ...this.state, ...item })
  }

  getRangesArray() {
    const selectionKeys = Object.keys(this.state.selectionRange);
    const rangesArray = [];
    selectionKeys.forEach((key) => {
      rangesArray.push(this.state.selectionRange[key]);
    });
    console.log(rangesArray);
    return rangesArray;
  }

  render() {
    const ranges = Object.keys(this.state).length > 0 && Object.keys(this.state).map((key) => this.state[key]) || [];
    console.log('colors!', colors)

    return (
      <React.Fragment>
        <div>
          <p>Select dates:</p>
          <DateRangePicker
            minDate={today}
            ranges={ranges}
            date={today}
            onChange={(item) => this.handleRangeChange(item)}
            scroll={{enabled: true}}
            direction="vertical"
            months={1}
            moveRangeOnFirstSelection={false}
          />
          <CityDraggableCardsList cards={this.props.cities} title="Select city:" moveCard={this.saveCityOrder}/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(NewTripForm);
