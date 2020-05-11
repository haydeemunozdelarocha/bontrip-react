import * as React from 'react';
import { connect } from 'react-redux';
import { saveCity } from '../../helpers/app';
import ReactMapboxGl, { ZoomControl, Marker } from "react-mapbox-gl";
import SVG from 'react-inlinesvg';
import {CitySuggestions} from "../../helpers/CitySuggestions";
import {IMapProps} from "./Map.I";
import {GlobalStore} from "../../redux/GlobalStore";
import {citiesThunks} from "../../redux/cities/cities.thunks";

const Map = ReactMapboxGl({
  accessToken: process.env.BONTRIP_MAP_KEY,
});

const MapWrapper: React.FunctionComponent<IMapProps> = ({markersData, location}): React.ReactElement => {

  const setMarker = (map, event) => {
    const {lng, lat} = event.lngLat;

    CitySuggestions.byCoordinates(lng, lat).then((city) => {

      GlobalStore.dispatch(citiesThunks.saveCity(city) as any);
    });
  };

  const renderMarkers = () => {
    return markersData.map((markerInfo, i) => (
      <Marker
      coordinates={[markerInfo.coordinates.lat, markerInfo.coordinates.lng]}
      key={`marker-${i}`}
      onClick={() => alert(markerInfo.color)}
      anchor={'bottom'}

      offset={[0, 0]}>
      <SVG id="map-marker" src="/images/marker.svg" preProcessor={code => code.replace(/fill=".*?"/g, `fill="${markerInfo.color}"`)}/>
    </Marker>));
  };

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      onClick={(map, event) => setMarker(map, event)}
      center={location}
    >
      {renderMarkers()}
      <ZoomControl position={'bottom-right'}/>
    </Map>
  );
}

export default MapWrapper;
