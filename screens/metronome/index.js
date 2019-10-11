import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Scale from "./scale";
import Icon from "../../assets/icons/frequency.svg";

export default class Metronome extends Component {

  render() {
    return (
      <LinearGradient
        colors={['#CACACA', '#FEFEFE', '#FFFFFF']}
        style={styles.tuner}>
        <Text style={styles.appName}>Y-TUNER</Text>
        <Scale/>
      </LinearGradient>
    );
  }

  componentDidMount() {

  }


}

const styles = StyleSheet.create({
  tuner: {
    height: '100%',
    paddingTop: 15
  },
  appName: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '700',
    color: '#313047',
    marginBottom: 45
  },
});
