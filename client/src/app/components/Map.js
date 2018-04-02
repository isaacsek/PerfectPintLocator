import React, { Component } from "react";
import { connect } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 47.6062, lng: -122.3321 }} >
    <Marker position={{ lat: 47.6062, lng: -122.3321 }} />
  </GoogleMap>
));



class Map extends Component {

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <MapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `600px`}} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // look at combined reducers, we called this piece of state - auth
        auth : state.auth
    };
}

export default connect(mapStateToProps)(Map);
