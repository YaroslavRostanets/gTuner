import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import Canvas from 'react-native-canvas';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const getRad = (deg) => {
    return (deg * Math.PI) / 180
};

const getDecCords  = (r, angle) => {
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
    handleCanvas = (canvas) => {

        const ctx = canvas.getContext('2d');
        canvas.width  = screenWidth;
        canvas.height = screenHeight / 2;

        ctx.lineWidth = 2; // толщина линии
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#D7D6D9';

        ctx.arc(screenWidth / 2,screenHeight / 3,screenWidth / 2 - 20,0, Math.PI,true);

        ctx.stroke();

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#777580';

        ctx.beginPath();
        ctx.moveTo(screenWidth / 2,screenHeight / 3);
        const {x, y} = getDecCords(190, 10);
        ctx.lineTo(x, y);

        for (let i = 180, j = 0; i <= 360; i = i + 4.5, j++) {
            const {x, y} = getDecCords(screenWidth / 2 - 25, i);
            let innerMarks;
            if ( !(j % 10) ) {
                innerMarks = getDecCords(screenWidth / 2 - 42, i);
                if(j === 0) ctx.strokeText("-40", innerMarks.x - 5, innerMarks.y + 15);
                if(j === 10) ctx.strokeText("-20", innerMarks.x - 5, innerMarks.y + 15);
                if(j === 20) ctx.strokeText("0", innerMarks.x - 5, innerMarks.y + 15);
                if(j === 30) ctx.strokeText("20", innerMarks.x - 5, innerMarks.y + 15);
                if(j === 40) ctx.strokeText("40", innerMarks.x - 5, innerMarks.y + 15);
            } else {
                innerMarks = getDecCords(screenWidth / 2 - 32, i);
            }

            ctx.beginPath();
            ctx.moveTo(innerMarks.x, innerMarks.y);
            console.log(x, y);
            ctx.lineTo(x, y);

            ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(screenWidth / 2,screenHeight / 3 - 20, 6, 0, 2*Math.PI, false);
        ctx.fillStyle = 'rgba(245, 62, 60, 0.20)';
        ctx.strokeStyle = 'rgba(245, 62, 60, 0.20)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(screenWidth / 2, screenHeight / 3 + 80, 100, getRad(255), getRad(285), false);
        ctx.strokeStyle = '#C5C5C8';
        ctx.shadowBlur = 7;
        ctx.shadowOffsetY = 4;
        ctx.shadowColor = '#C5C5C8';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(screenWidth / 2,screenHeight / 3 - 20, 3, 0, 2*Math.PI, false);
        ctx.fillStyle = '#F53E3C';
        ctx.strokeStyle = '#F53E3C';
        ctx.fill();
        ctx.stroke();
    };

    render() {
        return (
            <View style={styles.wrap}>
                <Canvas
                    style={styles.canvas}
                    ref={this.handleCanvas}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    canvas: {
        //borderWidth: 1,
        //borderColor: 'red',
        //borderStyle: 'solid',
    },
    wrap: {
        height: 0.37 * screenHeight,
        overflow: 'hidden',
        //borderWidth: 1,
        //borderStyle: 'solid',

    }
});
