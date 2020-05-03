import React from "react";

import MapView, { Marker } from 'react-native-maps'
import Permissions from 'expo'
import MapInfoPopUp from './MapInfoPopUp'
import { Dimensions, StyleSheet, View, Image, TouchableOpacity  } from "react-native";

const locations = require('./../../locations/locations.json')
const { width, height } = Dimensions.get('screen')

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: null,
        longitude: null,
        locations: [locations]
    };
  }

  async componentDidMount() {
      const {status} = await Permissions.getAsync(Permissions.LOCATION);

      if(status != 'granted') {
          const response = await Permissions.askAsync(Permissions.LOCATION);
      }

      // Grab current location
      navigator.geolocation.getCurrentPosition(
          ({coords: {latitude, longitude }}) => this.setState( {latitude, longitude} )
      )

      // Grab current resteraunt locations
      const { locations : [ sampleLocation ] } = this.state
  }

  onMarkerPress = location => () => {
    const { coords: { latitude, longitude } } = location
    this.setState({
      popUpPressed: true,
      destination: location,
      desLatitude: latitude,
      desLongitude: longitude
    })
  }

  renderMarkers = () => {
    const { locations } = this.state
    return (
      <View>
        {
          locations.map((location, idx) => {
            const {
              coords: { latitude, longitude }
            } = location
            return (
              <Marker
                key={idx}
                coordinate={{ latitude, longitude }}
                onPress={this.onMarkerPress(location)}
              />
            )
          })
        }
      </View>
    )
  }

  render() {
      const {latitude, longitude, destination, popUpPressed} = this.state;
    return (
        <MapView
            showsUserLocation
            style={{flex: 1}}
            initialRegion={
                latitude,
                longitude
            }
        >
          {this.renderMarkers()}
          {popUpPressed ? (
            <MapInfoPopUp 
            destination={destination}
            navigation={this.props.navigation}/>
          ) : (
           <View/>
          )}
        </MapView>
    );
  }
}



