import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Canvas from 'react-native-canvas';
import LinearGradient from 'react-native-linear-gradient';
import Scale from './scale';

export default class Tuner extends Component {

    render() {
        return (
            <LinearGradient colors={['#CACACA', '#FEFEFE' ,'#FFFFFF']} style={styles.scale}>
                <Text style={styles.appName}>Y-TUNER</Text>
                <Scale/>
                <Text>G</Text>
            </LinearGradient>
        );
    }


}

const styles = StyleSheet.create({
    appName: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '700',
        color: '#313047'
    },
    scale: {
        paddingTop: 12,
        height: '70%'
    }
});
