import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Instagram extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.instagram.com/realgrumpycat/' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}