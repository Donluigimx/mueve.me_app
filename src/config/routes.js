import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import MapsContainer from '../containers/MapsContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SignInContainer from '../containers/SignInContainer';
import SignUpContainer from '../containers/SignUpContainer';

const authNavigator = StackNavigator({
    SignIn: {
        screen: SignInContainer
    },
    SingUp: {
        screen: SignUpContainer
    }
}, {
    headerMode: 'none'
});

const appTabs = TabNavigator({
    Maps: {
        screen: MapsContainer,
        navigationOptions: {
            tabBarLabel: 'Rutas',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon 
                    name={'directions-bus'}
                    size={20}
                    style={{ color: tintColor }} />
            )
        }
    },
    Profile: {
        screen: ProfileContainer,
        navigationOptions: {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon 
                    name={'face'}
                    size={20}
                    style={{ color: tintColor }}/>
            )
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom
});

export const AuthNavigator = authNavigator;
export const AppTabs = appTabs;