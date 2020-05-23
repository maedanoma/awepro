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
    constructor(props) {
        super(props)
        this.state = {
            top: initializeAnimation(props.y)
        }
    }
    static propTypes = {
        y: PropTypes.number.isRequired,
        startWhen: PropTypes.bool,
        easing: PropTypes.object,
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
            value: this.state.top,
            toValue: this.props.y,
            easing: this.props.easing,
            duration: this.props.duration,
            delay: this.props.delay
        }])
    }
    componentWillUnmount() {
        // stopAnimation([this.state.top])
    }
    render() {
        let top = this.state.top
        return (
            <Animated.View style={[styles.container, ...this.props.style,
                { transform:[{ translateY: top }]}]} >
                {this.props.children}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    }
})