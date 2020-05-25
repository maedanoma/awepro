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

export default class ExpandVertical extends Component {
    state = {
        height: initializeAnimation(this.props.sets.from),
    }
    static propTypes = {
        // PropTypes.numebrを指定した場合、縦方向にアニメーションしません
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
        stopAnimation([this.state.height])
    }

    _start() {
        startTimingAnimation([{
            value: this.state.height,
            toValue: this.props.sets.to,
            duration: 300,
            delay: this.props.delay
        }])
    }

    render() {
        let height = this.state.height
        return (
            <Animated.View style={[styles.container, ...this.props.style, { height }]} >
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