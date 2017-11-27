import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActions from '../reducers/modules/maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import RouteSearch from '../components/RouteSearch';

class MapsContainer extends Component {

    state = {
        latitude: 0,
        longitude: 0,
    }

    mapRef = null;

    componentDidMount() {
        if (this.props.busStops.length === 0) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.setState({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                });
            });
        }
        this.mapRef.fitToSuppliedMarkers(
            this.props.busStops.map((busStop, key) => (key.toString())),
            false
        )
    }

    searchBusStopsRoute = route => {
        this.props.getBusStopsByRoute(route, this.props.token);
    }
    
    render() {
        const { busStops, route } = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>                
                <MapView
                    ref={ref => this.mapRef = ref}
                    style={styles.map}
                    showsUserLocation={true} >
                    {
                        busStops.map((busStop, key) => (
                            <MapView.Marker 
                                coordinate={{
                                    latitude: busStop.point.lat,
                                    longitude: busStop.point.lng
                                }}
                                title='Ruta'
                                key={key}
                                identifier={key.toString()}
                                description={route} />
                        ))
                    }
                </MapView>
                <RouteSearch searchAction={this.searchBusStopsRoute}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    }
});

export default connect(
    state => ({...state.maps, token: state.users.token}),
    dispatch => bindActionCreators(mapActions, dispatch)
)(MapsContainer);