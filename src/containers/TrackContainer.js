import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as trackActions from '../reducers/modules/track'
import TrackForm from '../components/TrackForm'
import BottomButton from '../components/BottomButton'

class TrackContainer extends Component {
  getRouteBuses = route => this.props.getRouteBuses(route, this.props.token)

  setTrackBus = bus => {
    if (!bus || bus === ''){
      return null
    }
    const trackBus = this.props.buses.find(val => val.number === bus)
    if (trackBus) {
      this.props.setTrackBus(trackBus.number)
    } else {
      this.props.createRouteBus(bus, this.props.routeId, this.props.token)
    }
  }

  trackBus = () => {
    const { trackBus, socket } = this.props
    navigator.geolocation.getCurrentPosition(pos => {
      socket.emit('busSet', {
        busId: trackBus,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
      console.log({
        busId: trackBus,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  }

  render () {
    const {route, trackBus} = this.props
    console.log(this.props)
    return (
      <View style={styles.container}>
        <TrackForm
          searchRoute={this.getRouteBuses}
          setBus={this.setTrackBus}
          route={route} />
        <BottomButton
          opacity={route !== null && trackBus !== null ? 1 : 0.5}
          action={'Iniciar Reporte'}
          enabled={route !== null && trackBus !== null}
          pressAction={this.trackBus} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})

export default connect(
  state => ({ ...state.track, token: state.users.token, socket: state.users.socket}),
  dispatch => bindActionCreators(trackActions, dispatch)
)(TrackContainer)
