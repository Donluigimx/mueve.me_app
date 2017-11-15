import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 310, height: 105}} source={require('../img/mueve_me_logo.png')}/>            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
})