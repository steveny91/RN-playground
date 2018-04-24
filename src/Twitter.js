import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Twitter extends React.Component {
    render() {
        let cookieInfo = `
            var cookie={};
            document.cookie.split('; ').forEach(function(i){cookie[i.split('=')[0]]=i.split('=')[1]});
            document.querySelector('input[type="text"]').value=cookie['9gag_email'] || '';
            document.querySelector('input[type="password"]').value=cookie['9gag_password'] || '';
            document.querySelector('a.btn.block.icon.fill').onclick = function(){
                document.cookie = '9gag_email='+document.querySelector('#f32b332b57e1b8').value;
                document.cookie = '9gag_password='+document.querySelector('#fa8e123e6fc834').value;
            };
        `;
        return (
            <WebView
                source={{ uri: 'https://www.9gag.com' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}
