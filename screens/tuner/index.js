import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import EventEmitter from "react-native-eventemitter";
import Canvas from 'react-native-canvas';
import LinearGradient from 'react-native-linear-gradient';
import Scale from './scale';

import Icon from "../../assets/icons/frequency.svg";

export default class Tuner extends Component {

    render() {
        return (
            <LinearGradient
              colors={['#CACACA', '#FEFEFE' ,'#FFFFFF']}
              style={styles.tuner}>
                <Text style={styles.appName}>Y-TUNER</Text>
                <Scale/>
                <View>
                    <Text style={styles.note}>G</Text>
                    <Icon style={styles.ico} width={30} height={30} />
                    <Text style={styles.frequency}>160 Hz</Text>
                </View>

            </LinearGradient>
        );
    }

    componentDidMount() {

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
    },
    note: {
        fontSize: 65,
        fontWeight: '700',
        color: '#323046',
        textAlign: 'center'
    },
    ico: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -5
    },
    frequency: {
        fontSize: 25,
        fontWeight: '700',
        color: '#323046',
        textAlign: 'center'
    },
    tuner: {
        height: '100%',
        paddingTop: 15
    }
});
