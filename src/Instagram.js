import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Instagram extends React.Component {
    render() {
        let cookieInfo = `
            var cookie={};
            document.cookie.split('; ').forEach(function(i){cookie[i.split('=')[0]]=i.split('=')[1]});
            document.querySelector('#f32b332b57e1b8').value=cookie['instagram_email'] || '';
            document.querySelector('#fa8e123e6fc834').value=cookie['instagram_password'] || '';
            document.querySelector('._t38eb').onclick = function(){
                document.cookie = 'instagram_email='+document.querySelector('#f32b332b57e1b8').value;
                document.cookie = 'instagram_password='+document.querySelector('#fa8e123e6fc834').value;
            };
        `;
        return (
            <WebView
                source={{ uri: 'https://www.instagram.com/' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}