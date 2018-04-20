import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Twitter extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://twitter.com/NBA' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}
