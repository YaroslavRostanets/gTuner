import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SwitchSelector from "react-native-switch-selector";

const tunerIcon = () => {
  return (

  )
};

export default class Bar extends Component {

  render() {


    return (
      <View style={styles.bar}>
        <SwitchSelector
          initial={0}
          height={55}
          buttonColor={'#F43D41'}
          borderColor={'#292637'}
          backgroundColor={'#272435'}
          bold={true}
          fontSize={16}
          textColor={'#615E7A'}
          onPress={value => this.setState({ gender: value })}
          hasPadding
          options={[
            { label: "TUNER", value: "TUNER"}, //images.feminino = require('./path_to/assets/img/feminino.png')
            { label: "METRONOM", value: "METRONOM" } //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
        />
      </View>
    );
  }

  componentDidMount() {

  }


}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#312F45',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 35,
    paddingRight: 35
  }
});
