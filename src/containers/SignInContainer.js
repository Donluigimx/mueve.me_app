import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../reducers/modules/users';
import Logo from '../components/Logo';
import AuthForm from '../components/AuthForm';

class SignInContainer extends Component {

    signIn = (username, password) => {
        this.props.authUser(username, password);
    };
    
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Logo/>
                <AuthForm
                    action={'Iniciar sesión'} 
                    onPressAction={this.signIn}/>
                <View style={styles.inferiorContainer}>
                    <Text>¿No tienes cuenta?  </Text>
                    <TouchableOpacity
                        onPress={ev => this.props.navigation.navigate('SingUp')}>
                        <Text style={styles.signUp}>Crea tu cuenta</Text>
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

export default connect(
    state => ({}),
    dispatch => bindActionCreators(userActions, dispatch)
)(SignInContainer);