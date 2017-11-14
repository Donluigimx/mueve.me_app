import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileContainer extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>This is the Profile Container</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})