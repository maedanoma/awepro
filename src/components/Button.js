import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export class LandscapeButton extends Component {
    render() {
        const {
            onPressButton,
            text,
            color,
            backgroundColor,
            borderColor,
        } = this.props;
        return (
            <TouchableOpacity
                onPress={onPressButton}
                style={[styles.landButton, { backgroundColor, borderColor }]}>
                <Text style={[styles.landText, { color }]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

export class LinkButton extends Component {
    render() {
        const {
            onPressButton,
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
    landButton: {
        width: 250,
        height: 50,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});