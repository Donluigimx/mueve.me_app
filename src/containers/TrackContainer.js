import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as trackActions from '../reducers/modules/track'
import TrackForm from '../components/TrackForm'

class TrackContainer extends Component {
  getRouteBuses = route => this.props.getRouteBuses(route, this.props.token)

  render () {
    const {route} = this.props
    return (
      <View style={styles.container}>
        <TrackForm
          searchRoute={this.getRouteBuses}
          route={route} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})

export default connect(
  state => ({ ...state.track, token: state.users.token}),
  dispatch => bindActionCreators(trackActions, dispatch)
)(TrackContainer)
