import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import AboutImage from '../images/star.png';

export default class About extends Component {

    static navtionOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Image source={AboutImage} style={[styles.icon, {tintColor}]}  />
        ),
        tabBarLabel: 'List'
     }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{padding: 20, fontSize: 20, padding: 20}}>
                    About
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        resizeMode: 'contain'
    }
})
