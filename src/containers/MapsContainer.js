import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import RouteSearch from '../components/RouteSearch';

export default class MapsContainer extends Component {

    state = {
        latitude: 0,
        longitude: 0,
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            });
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <RouteSearch />
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <MapView.Marker 
                        coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                    }} />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    }
  });