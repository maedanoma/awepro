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

export default class SlideVertical extends Component {
    state = {
        top: initializeAnimation(this.props.y)
    }
    static propTypes = {
        y: PropTypes.number.isRequired,
        startWhen: PropTypes.bool,
        easing: PropTypes.object,
        duration: PropTypes.number,
    }
    static defaultProps = {
        startWhen: false,
        easing: Easing.exp,
        duration: 250,
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
            value: this.state.top,
            toValue: this.props.y,
            easing: this.props.easing,
            duration: this.props.duration,
        }])
    }
    componentWillUnmount() {
        stopAnimation([this.state.x])
    }
    render() {
        let top = this.state.top
        return (
            <Animated.View {...this.props.props}
                style={[styles.container, ...this.props.style, { top }]} >
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