import React, { Component } from 'react';
import './map.css';
import { Map, TileLayer, Marker,} from "react-leaflet";

class map extends Component {

  render() {
    return (
      <Map center={[14.2916698, -89.8958282]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[
            14.2916698, -89.8958282
          ]} 
        />
      </Map>
    )
  }

}

export default map;