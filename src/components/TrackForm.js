import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default class TrackForm extends Component {
  render () {
    const {searchRoute, route} = this.props
    this.route = ''
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer} >
          <Text style={styles.inputText} >Ruta: </Text>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={val => this.route = val}
            onBlur={() => searchRoute(this.route)} />
        </View>
        {
          route
          ? <View style={styles.inputContainer} >
              <Text style={styles.inputText} >Número de camión: </Text>
              <TextInput style={styles.inputBox} />
          </View>
          : <View />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  inputContainer: {
    flexDirection: 'column',    
    marginHorizontal: 20,
    marginVertical: 10
  },
  inputBox: {
    width: 300,
    borderRadius: 20,
    backgroundColor:'rgba(255, 255,255,255)',
    paddingLeft: 20,
    elevation: 4
  },
  inputText: {
    fontSize: 20,
    marginVertical: 10
  }
})
