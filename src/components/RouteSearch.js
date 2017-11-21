import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default class RouteSearch extends Component {

    render() {
        return(
            <View style={styles.searchInput}>
                <TextInput 
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    onTouchStart={(ev) => console.log('tocame')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: 300,
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor:'rgba(255, 255,255,255)',
        paddingLeft: 20,
        elevation: 4,
    },
    searchInput: {
        justifyContent: 'flex-start',
        flexGrow: 1,
    }
})