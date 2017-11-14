import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import MapsContainer from '../containers/MapsContainer';
import ProfileContainer from '../containers/ProfileContainer';

const stackNavigator = TabNavigator({
    Maps: {
        screen: MapsContainer,
        navigationOptions: {
            tabBarLabel: 'Rutas',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon 
                    name={'directions-bus'}
                    size={20}
                    style={{ color: tintColor }}/>
            )
        }
    },
    Profile: {
        screen: ProfileContainer,
        navigationOptions: {
            tabBarLabel: 'Profile',
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

export default stackNavigator;