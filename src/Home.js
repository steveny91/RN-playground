import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'http://youtube.com' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}