import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class BottomButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          ref={input => input ? input.setOpacityTo(this.props.opacity) : ''}
          disabled={!this.props.enabled} >
          <Text style={styles.buttonText} >{this.props.action}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    width:200,
    backgroundColor:'#00BCD4',
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 15,
    elevation: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15
  }
})
