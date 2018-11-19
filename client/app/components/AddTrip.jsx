import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from './Header';
import CitiesMap from './CitiesMap';
import Sidepanel from './Sidepanel';
import NewTripForm from './NewTripForm';
import DraggableCardsList from './DraggableCardsList';
import {store} from '../app';
import * as actions from '../redux/actions';
const update = require('immutability-helper');

class AddTrip extends React.Component {
  constructor(props) {
    super(props);
    let reduxState = props.state;

    this.state = {
      loaded: false,
      user: reduxState.login.user,
      trip: reduxState.trip.selectedTrip.id,
      places: [],
      likedPlaces: reduxState.trip.likedPlaces || [],
      location: reduxState.trip.selectedTrip.cities[0].coordinates || null,
      cities: reduxState.trip.selectedTrip.cities || [],
      view: 'all',
      category: '',
      loadingExplore: 'visible',
      selectedDates: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('re rendering', prevState.cards, this.state.cards);
  }
  // saveTrip() {
  //   if (!this.props.end || !this.props.start) {
  //     alert('Please select your travel dates on left panel.');
  //   }
  //   if (!this.props.user) {
  //     if (confirm('You are not logged in. Your changes will disappear if you leave the page. Would you like to login?')) {
  //       browserHistory.push({pathname: '/login'});
  //     } else {
  //       browserHistory.push({pathname: '/planner'});
  //     }
  //   } else {
  //     browserHistory.push({pathname: '/planner'});
  //   }
  // }

  moveCard(dragIndex, hoverIndex) {
    const { cities } = this.state;
    const dragCard = cities[dragIndex];

    this.setState(
      update(this.state, {
        cities: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    );
  }

  render() {
    return (
      <div>
        <Header navigation={false} home={false}/>
        <Sidepanel image={'/images/cities-01.png'} orientation="left">
          <NewTripForm />
          <DraggableCardsList moveCard={this.moveCard.bind(this)} cards={this.state.cities} title={'Cities'}/>
        </Sidepanel>
        <CitiesMap loaded={this.state.loaded} location={this.state.location}  cities={this.state.cities}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(AddTrip);
