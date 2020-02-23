import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MapWrapper from './Map';
import Sidepanel from './Sidepanel';
import NewTripForm from './NewTripForm';
import PlacesDraggableCardsList from './PlacesDraggableCardsList';
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

  componentWillReceiveProps(nextProps){
    if (JSON.stringify(nextProps.state.trip.selectedTrip.cities) !== JSON.stringify(this.props.state.trip.selectedTrip.cities)) {
      this.setState({
        cities: nextProps.state.trip.selectedTrip.cities
      });
    }
  }

  moveCard(dragIndex, hoverIndex) {
    store.dispatch(actions.reorderCity(null, dragIndex, hoverIndex));
  }

  render() {
    return (
      <div>
        <Header navigation={false} home={false}/>
        <Sidepanel index={1} image={'/images/map.png'} orientation="left">
          <NewTripForm cities={this.state.cities}/>
        </Sidepanel>
        <Sidepanel color={'#e5500b'} index={2} image={'/images/cities.png'} orientation="left">
          <select>
            <option>Select a city</option>
            {
              this.state.cities.map((city) => <option>{city.name}</option>)
            }
          </select>
          <PlacesDraggableCardsList cards={[]} title="Saved Places" />
        </Sidepanel>
        <MapWrapper loaded={this.state.loaded} location={this.state.location}  markers={this.state.cities}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(AddCities);
