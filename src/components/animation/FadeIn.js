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

export default class FadeIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: initializeAnimation(0),
        }
    }
    static propTypes = {
        duration: PropTypes.number
    }
    static defaultProps = {
        duration: 500
    }
    componentDidMount() {
        startTimingAnimation([{
            value: this.state.opacity,
            duration: this.props.duration,
            toValue: 1,
        }])
    }

    componentWillUnmount() {
        stopAnimation([this.state.opacity])
    }

    render() {
        let opacity = this.state.opacity
        return (
            <Animated.View style={[styles.container, { opacity }]} >
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