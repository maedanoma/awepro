import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';

export class LandscapeButton extends Component {
    state = {
        expandWidth: new Animated.Value(40),
        fadeIn: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(this.state.expandWidth,
            {
                toValue: 250,
                duration: 500,
                easing: Easing.quad,
            }
        ).start();
        Animated.timing(this.state.fadeIn,
            {
                toValue: 1,
                duration: 1200,
            }
        ).start();
    }

    render() {
        let width = this.state.expandWidth;
        let opacity = this.state.fadeIn;
        const {
            // ボタンが押された時の処理
            onPressButton,
            // レイアウト
            text,
            color,
            backgroundColor,
            borderColor,
        } = this.props;
        return (
            <Animated.View style={[styles.landButton, { width, backgroundColor, borderColor, opacity }]} >
                <TouchableOpacity style={styles.landTouchArea} onPress={onPressButton}>
                    <Animated.Text style={[styles.landText, { color, opacity }]}>
                        {text}
                    </Animated.Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

export class LinkButton extends Component {
    render() {
        const {
            // ボタンが押された時の処理
            onPressButton,
            // レイアウト
            text,
            color,
        } = this.props;
        return (
            <TouchableOpacity
                onPress={onPressButton}>
                <Text style={[styles.linkText, { color }]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    linkText: {
        fontSize: 16,
    },
    landText: {
        fontSize: 21,
    },
    landTouchArea: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    landButton: {
        height: 50,
        borderRadius: 30,
        borderWidth: 1,
    },
});