import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    ImageBackground,
    Dimensions,
} from 'react-native';

const bagro = require('../res/login_gomes.jpg');

export class CardHeader extends Component {
    state = {
        headerImageOpacity: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(this.state.headerImageOpacity,
            {
                toValue: 0.8,
                duration: 2000,
            }
        ).start();
    }

    componentWillUnmount() {
        this.state.headerImageOpacity.stopAnimation();
    }

    render() {
        let opacity = this.state.headerImageOpacity;
        return (
            <View style={styles.header}>
                <Animated.View style={[styles.headerImage, { opacity }]}>
                    <ImageBackground
                        style={styles.headerImage}
                        source={bagro} />
                </Animated.View>
                <View style={styles.headerCard} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('screen').height * 0.075,
    },
    headerImage: {
        height: Dimensions.get('screen').height * 0.1,
    },
    headerCard: {
        height: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').width,
        borderRadius: 20,
        backgroundColor: '#F4F4F4',
        translateY: -(Dimensions.get('screen').height * 0.04),
    },
});