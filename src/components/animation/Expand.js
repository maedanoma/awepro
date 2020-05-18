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

export default class Expand extends Component {
    constructor(props) {
        super(props)
        let height = props.height instanceof Object? props.height.from: props.height
        let width = props.width instanceof Object? props.width.from: props.width
        this.state = {
            height: initializeAnimation(height),
            width: initializeAnimation(width),
        }
    }
    static propTypes = {
        // PropTypes.numebrを指定した場合、縦方向にアニメーションしません
        height: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.number), PropTypes.number]).isRequired,
        width: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.number), PropTypes.number]).isRequired,
    }
    static defaultProps = {
    }

    componentDidMount() {
        let height = this.props.height
        let width = this.props.width
        startTimingAnimation([{
            value: this.state.height,
            toValue: height instanceof Object? height.to : height,
            duration: 400,
        }, {
            value: this.state.width,
            toValue: width instanceof Object? width.to : width,
            duration: 400,
        }])
    }

    componentWillUnmount() {
        stopAnimation([this.state.height, this.state.width])
    }

    render() {
        let width = this.state.width
        let height = this.state.height
        return (
            <Animated.View style={[styles.container, { width, height }]} >
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