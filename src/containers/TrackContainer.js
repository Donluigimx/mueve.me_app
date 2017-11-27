import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TrackContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>TrackContainer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})
