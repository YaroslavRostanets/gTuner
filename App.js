/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Tuner from './modules/tuner';
import Recording from 'react-native-recording';
import EventEmitter from "react-native-eventemitter";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  componentDidMount() {
    console.log('test__');
    requestMicPermission()
        .then( data => console.log(data) )
        .catch( err => console.log(err) );

    console.log('tuner2: ', Tuner);
    const tuner = new Tuner();
    tuner.init().start();
    // EventEmitter.on("foo", (value)=>{
    //   console.log("foo", value);
    // });
  }
}

async function requestMicPermission() {
  const isAlowed = await PermissionsAndroid.check('RECORD_AUDIO');

  if (isAlowed) return true;

  try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'GTuner Permission',
          message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use mic');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
