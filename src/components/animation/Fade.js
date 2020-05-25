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

export default class Fade extends Component {
    state = {
        opacity: initializeAnimation(this.props.sets.from),
    }
    static propTypes = {
        sets: PropTypes.object,
        duration: PropTypes.number,
        delay: PropTypes.number,
        startWhen: PropTypes.bool
    }
    static defaultProps = {
        sets: {from: 0, to: 1},
        duration: 500,
        delay: 0,
        startWhen: true,
    }
    componentDidMount() {
        if (!this.props.startWhen) return
        this._start()
    }

    componentDidUpdate() {
        this._start()
    }

    componentWillUnmount() {
        stopAnimation([this.state.opacity])
    }

    _start() {
        startTimingAnimation([{
            value: this.state.opacity,
            duration: this.props.duration,
            delay: this.props.delay,
            toValue: this.props.sets.to,
        }])
    }

    render() {
        let opacity = this.state.opacity
        return (
            <Animated.View style={[styles.container, { opacity, ...this.props.style }]} >
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