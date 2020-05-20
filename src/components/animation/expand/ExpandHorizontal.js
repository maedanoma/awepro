import React, { Component } from 'react';
import {
    Animated, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types'
import {
    initializeAnimation,
    startTimingAnimation,
    stopAnimation,
} from '../Animation'

export default class ExpandHorizontal extends Component {
    state = {
        width: initializeAnimation(this.props.sets.from),
    }
    static propTypes = {
        // from, to
        sets: PropTypes.objectOf(PropTypes.number).isRequired,
        startWhen: PropTypes.bool,
        delay: PropTypes.number
    }
    static defaultProps = {
        startWhen: false,
        delay: 0
    }
    componentDidMount() {
        if (!this.props.startWhen) return
        this._start()
    }

    componentDidUpdate() {
        this._start()
    }

    componentWillUnmount() {
        stopAnimation([this.state.width])
    }

    _start() {
        startTimingAnimation([{
            value: this.state.width,
            toValue: this.props.sets.to,
            duration: 300,
            delay: this.props.delay
        }])
    }

    render() {
        let width = this.state.width
        return (
            <Animated.View style={[styles.container, ...this.props.style, { width }]} >
                {this.props.children}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
})