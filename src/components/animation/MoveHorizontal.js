import React, { Component } from 'react';
import {
    Animated, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types'
import {
    initializeAnimation,
    startTimingAnimation,
    stopAnimation,
} from './Animation'

export default class MoveHorizontal extends Component {
    state = {
        left: initializeAnimation(this.props.x)
    }
    static propTypes = {
        x: PropTypes.number.isRequired,
    }
    componentDidUpdate(prevProps, prevState) {
        this._start()
    }
    _start() {
        startTimingAnimation([{
            value: this.state.left,
            toValue: this.props.x,
            duration:250,
        }])
    }
    componentWillUnmount() {
        stopAnimation([this.state.left])
    }
    render() {
        let left = this.state.left
        return (
            <Animated.View {...this.props.props}
                style={[styles.container,
                    { left, ...this.props.style }]} >
                {this.props.children}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
})