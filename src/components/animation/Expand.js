import React, { Component } from 'react';
import {
    Animated, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types'
import {
    StartTimingAnimation,
    StopAnimation
} from './Animation'

export class FadeExpand extends Component {
    /**
     * @param state.width
     * @param state.height
     * @param state.opacity
     */
    constructor(props) {
        super(props)
        let height = props.height instanceof Object? props.height.from: props.height
        let width = props.width instanceof Object? props.width.from: props.width
        this.state = {
            height: new Animated.Value(height),
            width: new Animated.Value(width),
            opacity: new Animated.Value(0),
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
        StartTimingAnimation([{
            value: this.state.height,
            toValue: height instanceof Object? height.to : height,
            duration: 400,
        }, {
            value: this.state.width,
            toValue: width instanceof Object? width.to : width,
            duration: 400,
        }, {
            value: this.state.opacity,
            toValue: 1,
        }])
    }

    componentWillUnmount() {
        StartTimingAnimation([{
            value: this.state.height,
            toValue: this.props.height.from,
        }, {
            value: this.state.width,
            toValue: this.props.width.from,
        }, {
            value: this.state.opacity,
            toValue: 0,
        }])
        StopAnimation([this.state.height, this.state.width, this.state.opacity])
    }

    render() {
        let width = this.state.width
        let height = this.state.height
        let opacity = this.state.opacity
        return (
            <Animated.View style={[styles.container, { width, height, opacity }]} >
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