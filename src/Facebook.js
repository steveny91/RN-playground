import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';



export default class Facebook extends React.Component {
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

// export default class Facebook extends React.Component {
//     render() {
//         return (
//             <WebView
//                 source={{ uri: 'https://www.facebook.com/' }}
//                 style={{ marginTop: 20 }}
//             />
//         );
//     }
// }