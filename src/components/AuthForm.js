import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AuthForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Usuario"
                    keyboardType="email-address"
                    onChangeText={val => this.username = val}
                    onSubmitEditing={()=> this.password.focus()} />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Contraseña"
                    secureTextEntry={true} 
                    onChangeText={val => this.password = val}
                    ref={el => this.password = el}/>
                <TouchableOpacity style={styles.button}
                    onPress={ev => this.props.onPressAction(this.username, this.password)} >
                    <Text style={styles.buttonText}>{this.props.action}</Text>
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
    },
    inputBox: {
        width: 300,
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor:'rgba(255, 255,255,255)',
        paddingLeft: 20,
        elevation: 4,
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
        color: '#FFFFFF',
    }
});