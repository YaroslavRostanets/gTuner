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

import {TUNER, METRONOM} from "./constants";
import TunerScreen from './screens/tuner';
import Metronom from './screens/metronome';
import Bar from './layout/Bar';
import SwitchSelector from "react-native-switch-selector";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TUNER
    };
  }

  toggleScreen(screen) {
    this.setState({
      activeTab: screen
    }, () => {
      if (this.state.activeTab === TUNER) {
        Tuner.init().start();
      } else {
        Tuner.stop();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {(this.state.activeTab === TUNER)
            ? <TunerScreen style={styles.scale}/>
            : <Metronom/>}
        </View>
        <Bar toggleScreen={this.toggleScreen.bind(this)}/>
      </View>
    );
  }

  componentDidMount() {
    requestMicPermission()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    //Tuner.init().start();
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
    backgroundColor: '#F5FCFF',

  },
  tabContainer: {
    height: '85%',
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
