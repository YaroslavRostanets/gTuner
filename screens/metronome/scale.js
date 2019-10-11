import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Animated, TextInput} from 'react-native';
import Canvas from 'react-native-canvas';
import Ripple from 'react-native-material-ripple';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const getRad = (deg) => {
  return (deg * Math.PI) / 180
};

const getDecCords = (r, angle) => {
  const getRad = (deg) => {
    return (deg * Math.PI) / 180
  };

  const x = r * Math.cos(getRad(angle));
  const y = r * Math.sin(getRad(angle));

  return {
    x: x + screenWidth / 2,
    y: y + screenHeight / 3
  }
};

export default class Scale extends Component {

  constructor(props) {
    super(props);

    this.cents = new Animated.Value(0);
  }

  handleCanvas = (canvas) => {
    if (!canvas) return false;

    const ctx = canvas.getContext('2d');
    canvas.width = screenWidth;
    canvas.height = screenHeight * 0.75;

    var metHeight = canvas.height * 0.75;

    var trapTop = screenWidth / 5.2;
    var trapBot = screenWidth - screenWidth / 3;

    ctx.beginPath();
    ctx.moveTo((screenWidth - trapTop) / 2, 0);
    ctx.lineTo((screenWidth - trapTop) / 2 + trapTop, 0);
    ctx.lineTo((screenWidth - trapBot) / 2 + trapBot, metHeight);
    ctx.lineTo((screenWidth - trapBot) / 2, metHeight);
    ctx.lineTo((screenWidth - trapTop) / 2, 0);

    ctx.fillStyle = "#34495E";
    ctx.strokeStyle = "#34495E";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo((screenWidth - trapTop) / 2 + 10, 10);
    ctx.lineTo((screenWidth - trapTop) / 2 + trapTop - 10, 10);
    ctx.lineTo((screenWidth - trapBot) / 2 + trapBot - 60, metHeight * 0.6);
    ctx.lineTo((screenWidth - trapBot) / 2 + 60, metHeight * 0.6);
    ctx.lineTo((screenWidth - trapTop) / 2 + 10, 10);

    ctx.fillStyle = "#21C2F8";
    ctx.strokeStyle = "#21C2F8";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(screenWidth / 2 - 3, 20, 6, metHeight * 0.6 - 40);
    ctx.strokeStyle = "#34495E";
    ctx.fillStyle = "#34495E";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();

    for (var i = 0, start = 20; i <= 6; i++) {
      ctx.rect(screenWidth / 2 - 5, start, 10, 2);
      start = start * 1.5;
    }
    ctx.stroke();
    ctx.fill();

  };


  render() {
    return (
      <View style={styles.wrap}>
        <Canvas
          style={styles.canvas}
          ref={this.handleCanvas}/>
        <View style={styles.ctrlBtns}>
          <Ripple style={styles.btn}>
            <Text style={styles.btnText}>-</Text>
          </Ripple>
          <Text>123</Text>
          <Ripple style={styles.btn}>
            <Text style={styles.btnText}>+</Text>
          </Ripple>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  canvas: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
  },
  ctrlBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: screenHeight * 0.5,
    left: screenWidth / 2,
    margin: 'auto'
  },
  wrap: {
    position: 'relative'
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#21C2F8',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  btnText: {
    color: '#FFFFFF'
  }
});
