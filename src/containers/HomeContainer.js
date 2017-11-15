import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { AppTabs, AuthNavigator } from '../config/routes';
import SignInContainer from './SignInContainer';

class HomeContainer extends Component {
    render() {
        const { isAuthed } = this.props;
        return (
            <View style={styles.container}>
                {   
                    isAuthed
                    ? <AppTabs />
                    : <AuthNavigator />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
});

export default connect(
    state => ({
        ...state.users,
    })
)(HomeContainer);