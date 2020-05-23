import React, { Component } from 'react';
import {
    Animated, StyleSheet, Easing
} from 'react-native';
import PropTypes from 'prop-types'
import {
    initializeAnimation,
    startTimingAnimation,
    stopAnimation,
} from '../Animation'

export default class SlideHorizontal extends Component {
    state = {
        left: initializeAnimation(this.props.x)
    }
    static propTypes = {
        x: PropTypes.number.isRequired,
        startWhen: PropTypes.bool,
        easing: PropTypes.func,
        duration: PropTypes.number,
        delay: PropTypes.number
    }
    static defaultProps = {
        startWhen: false,
        easing: Easing.exp,
        duration: 300,
        delay: 0
    }
    componentDidMount() {
        if (!this.props.startWhen) return
        this._start() 
    }
    componentDidUpdate(prevProps, prevState) {
        this._start()
    }
    _start() {
        startTimingAnimation([{
            value: this.state.left,
            toValue: this.props.x,
            easing: this.props.easing,
            duration: this.props.duration,
            delay: this.props.delay
        }])
    }
    componentWillUnmount() {
        stopAnimation([this.state.left])
    }
    render() {
        let left = this.state.left
        return (
            <Animated.View style={[styles.container, ...this.props.style, 
                { transform:[{ translateX: left }]}]} >
                {this.props.children}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
})