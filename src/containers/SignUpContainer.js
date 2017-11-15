import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import AuthForm from '../components/AuthForm';

class SignUpContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <AuthForm 
                    action={'Crear cuenta'} />
                <View style={styles.inferiorContainer}>
                    <Text>¿Ya tienes cuenta?  </Text>
                    <TouchableOpacity 
                        onPress={ev => this.props.navigation.goBack()} >
                        <Text style={styles.signUp}>Inicia sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
        alignItems:'center',
        justifyContent: 'center',
    },
    image: {
        flexGrow: 1,
        width: 300, 
        height: 40,
        alignItems: 'center'
    },
    inferiorContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    signUp: {
        color: '#00BCD4',
    }
});

export default SignUpContainer;