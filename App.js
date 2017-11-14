import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/config/routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});