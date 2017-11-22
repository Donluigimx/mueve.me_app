import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default class RouteSearch extends Component {

    render() {
        const { searchAction } = this.props;
        this.route = '';
        return(
            <View style={styles.searchInput}>
                <TextInput 
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={val => this.route = val}
                    onBlur={() => searchAction(this.route)}
                    returnKeyType='search' />
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
        fontSize: 20,
    },
    searchInput: {
        alignItems: 'center',
        marginTop: 0,
        maxHeight: 100,
    }
})