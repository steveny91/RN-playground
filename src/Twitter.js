import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';



export default class Twitter extends React.Component {
    render() {
        const PolicyHTML = require('./index.html');
        return (
            <WebView
                source={PolicyHTML}
                style={{ marginTop: 20 }}
            />
        );
    }
}
