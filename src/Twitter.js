import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Twitter extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.9gag.com' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}
