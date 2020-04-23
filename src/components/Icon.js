/**
 * Icon
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
} from 'react-native';

const backImage = require('../res/login_everton.jpg')

export default class Icon extends Component {
    state = {
        jumpOut: new Animated.Value(0.5),
    }

    componentDidMount() {
        Animated.spring(
            this.state.jumpOut,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
    }

    render() {
        let scale = this.state.jumpOut;
        const {
            marginTop,
            opacity,
        } = this.props;
        return (
            <View style={[styles.container, { marginTop, opacity }]}>
                <Animated.Image
                    source={backImage}
                    style={[styles.image, { opacity, transform:[{scale}] }]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "cover",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
});