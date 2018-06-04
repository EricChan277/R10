import React, { Component } from 'react';
import { View } from 'react-native';
import Map from './Map';

const mapKey = 'AIzaSyChBkZ0lqkmwPNCp93Jh0dr_bD5xPzzNPI';

class MapContainer extends Component {
  render() {
    return (
      <View>
        <Map />
      </View>
    );
  }
}

export default MapContainer;
