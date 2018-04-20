import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Facebook extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.facebook.com/devbootcamp/' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}