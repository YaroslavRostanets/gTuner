import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import Camerton from "../assets/icons/camerton.svg";
import Metronom from "../assets/icons/metronome.svg";
import CamertonWhite from "../assets/icons/camerton_white.svg";
import MetronomWhite from "../assets/icons/metronome_white.svg";
import {TUNER, METRONOM} from "../constants";

const iconStyle = {
  marginRight: 5,
  marginLeft: -5
};

const tunerIcon = (tab) => {
  console.log('tab: ', tab);
  return (
    tab === TUNER
      ? <CamertonWhite width={20} height={20} style={iconStyle}/>
      : <Camerton width={20} height={20} style={iconStyle}/>
  )
};

const metronomIcon = (tab) => {
  return (
    tab === METRONOM
      ? <MetronomWhite width={20} height={20} style={iconStyle}/>
      : <Metronom width={20} height={20} style={iconStyle}/>
  )
};

export default class Bar extends Component {

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
      this.props.toggleScreen(screen)
    });
  }

  render() {
    const { activeTab } = this.state;

    console.log('ACTIVE_TAB: ', this.state.activeTab);

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
          onPress={value => this.toggleScreen(value)}
          options={[
            { label: "TUNER", value: "TUNER", customIcon: tunerIcon(activeTab)},
            { label: "METRONOM", value: "METRONOM", customIcon: metronomIcon(activeTab) }
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
