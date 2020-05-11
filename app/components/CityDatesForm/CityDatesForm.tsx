import * as React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-date-range';
import {GlobalStore} from "../../redux/GlobalStore";
import {citiesActions} from "../../redux/cities/cities.actions";
import {userActions} from "../../redux/user/user.actions";
import { ICityDatesFormProps, ICityDatesFormState } from "./CityDatesForm.I";
import daterangepicker = require("daterangepicker");
import DraggableCardsList from "../DraggableCardsList/DraggableCardsList";
import {City} from "../../models/City";

let colors = [];
const today = new Date();

class CityDatesForm extends React.Component<ICityDatesFormProps, ICityDatesFormState> {
  constructor(props) {
    super(props);

    this.state = {
      ranges: [],
      activeRange: [0, 0]
    }
  }
  public componentDidMount() {
    this.createCityDateRanges();
    this.updateActiveRange();
  }

  public componentDidUpdate(prevProps: ICityDatesFormProps) {
    if (prevProps.cities !== this.props.cities) {
      this.createCityDateRanges();
    }

    if (prevProps.activeCityId !== this.props.activeCityId) {
      this.updateActiveRange();
    }
  }

  public updateActiveRange() {
    const activeCityIndex = this.getCurrentActiveCityIndex();

    this.setState({
      activeRange: [activeCityIndex, activeCityIndex]
    })
  }

  public createCityDateRanges() {
    const {cities} = this.props;
    colors = [];

    const ranges = cities.map((city) => {
      if (city) {
        return {
          startDate: city.startDate ? new Date(city.startDate) : today,
          endDate:  city.endDate ? new Date(city.endDate) : new Date(today.getDate() + 1),
          key: city.id,
        }
      }
    });

    this.setState({
      ranges
    });
  }

  public getCurrentActiveCityIndex() {
    return this.props.cities.findIndex((city) => city && city.id === this.props.activeCityId);
  }

  public handleRangeChange(range: daterangepicker) {
    const getRange = Object.values(range) && Object.values(range).length > 0 && Object.values(range)[0];
    const {key, startDate, endDate } = getRange;
    GlobalStore.dispatch(citiesActions.updateOne({
      cityId: key,
      update: {
        startDate,
        endDate,
      }
    }));

    const currentActiveCityIndex = this.getCurrentActiveCityIndex();
    const nextActiveCity: City = currentActiveCityIndex !== this.props.cities.length - 1 ? this.props.cities[currentActiveCityIndex + 1] : this.props.cities[0];

    GlobalStore.dispatch(userActions.setActiveCity({cityId: nextActiveCity.id}));
  }

  public clickCard(cityId) {
    GlobalStore.dispatch(userActions.setActiveCity({cityId}));
  }

  public render() {
    const {colors, cities} = this.props;
    const {ranges, activeRange} = this.state;

    return (
      <React.Fragment>
        <div>
          <p>Select dates:</p>
          <DateRangePicker
            rangeColors={colors}
            focusedRange={activeRange}
            initialFocusedRange={activeRange}
            ranges={ranges}
            onChange={(range) => this.handleRangeChange(range)}
            scroll={{enabled: true}}
            direction="vertical"
            months={1}
            moveRangeOnFirstSelection={false}
          />
          <DraggableCardsList cards={cities} title="Select city:" clickCard={(cityId) => this.clickCard(cityId)}/>
        </div>
      </React.Fragment>
    );
  }
}

export default CityDatesForm;
