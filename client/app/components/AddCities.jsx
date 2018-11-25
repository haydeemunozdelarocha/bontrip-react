import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Map from './Map';
import Sidepanel from './Sidepanel';
import NewTripForm from './NewTripForm';
import DraggableCardsList from './DraggableCardsList';
import { store } from "../app";
import * as actions from "../redux/actions";


class AddCities extends React.Component {
  constructor(props) {
    super(props);
    let reduxState = props.state;

    this.state = {
      loaded: false,
      location: reduxState.trip.selectedTrip.cities[0].coordinates || null,
      cities: reduxState.trip.selectedTrip.cities || [],
    };
  }

  moveCard(dragIndex, hoverIndex) {
    store.dispatch(actions.reorderCity(null, dragIndex, hoverIndex));
  }

  render() {
    return (
      <div>
        <Header navigation={false} home={false}/>
        <Sidepanel image={'/images/cities-01.png'} orientation="left">
          <NewTripForm />
          <DraggableCardsList moveCard={this.moveCard.bind(this)} cards={this.state.cities} title={'Cities'}/>
        </Sidepanel>
        <Map loaded={this.state.loaded} location={this.state.location}  markers={this.state.cities}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(AddCities);
