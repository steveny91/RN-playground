import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../src/Home';
import Facebook from '../src/Facebook';
import Instagram from '../src/Instagram';
import Twitter from '../src/Twitter';


export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
        },
    },
    Facebook: {
        screen: Facebook,
        navigationOptions: {
            tabBarLabel: 'Facebook',
            tabBarIcon: ({ tintColor }) => <Icon type="entypo" name="facebook" size={35} color={tintColor} />
        },
    },
    Instragram: {
        screen: Instagram,
        navigationOptions: {
            tabBarLabel: 'Instagram',
            tabBarIcon: ({ tintColor }) => <Icon type="entypo" name="instagram" size={35} color={tintColor} />
        },
    },
    Twitter: {
        screen: Twitter,
        navigationOptions: {
            tabBarLabel: 'Twitter',
            tabBarIcon: ({ tintColor }) => <Icon type="entypo" name="twitter" size={35} color={tintColor} />
        },
    },
});
