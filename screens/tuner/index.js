import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import EventEmitter from "react-native-eventemitter";
import Canvas from 'react-native-canvas';
import LinearGradient from 'react-native-linear-gradient';
import Scale from './scale';

import Icon from "../../assets/icons/frequency.svg";
import PitchFinder from "pitchfinder";

export default class Tuner extends Component {

    constructor (props) {
        super(props);
        this.state = {
            note: 'A',
            f: '160'
        }
    }


    render() {
        const {note, f} = this.state;

        return (
            <LinearGradient
              colors={['#CACACA', '#FEFEFE' ,'#FFFFFF']}
              style={styles.tuner}>
                <Text style={styles.appName}>Y-TUNER</Text>
                <Scale/>
                <View>
                    <Text style={styles.note}>{note}</Text>
                    <Icon style={styles.ico} width={30} height={30} />
                    <Text style={styles.frequency}>{f} Hz</Text>
                </View>

            </LinearGradient>
        );
    }

    setNote(note) {
        this.setState({
           note: note.note,
           f: Math.round(note.f)
        });
    }

    componentDidMount() {
        EventEmitter.on("noteDetected", this.setNote.bind(this));
    }

    componentWillUnmount() {
        EventEmitter.removeListener("noteDetected", this.setNote);
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
