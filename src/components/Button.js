import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';
import PropTypes from 'prop-types'

export class LandscapeButton extends Component {
    /**
     * @param props
     *  (Required)
     *      onPressButton:              ボタン押下時の動作
     *      buttonName:                 ボタン名
     *  (Options) def→propDefaults
     *      buttonExpandInitialWidth:   ボタンの横幅の初期値  
     *      buttonWidth:                ボタンの横幅        
     *      buttonHeight:               ボタンの縦幅
     *      buttonNameColor:            ボタン名の色
     *      buttonColor:                ボタンの色
     *      buttonBorderColor:          ボタンの枠の色
     */
    constructor(props) {
        super(props)
        this.state = {
            expandWidth: new Animated.Value(this.props.buttonExpandInitialWidth),
            fadeIn: new Animated.Value(0),
        }
    }
    static propTypes = {
        buttonExpandInitialWidth: PropTypes.number,
        buttonWidth: PropTypes.number,
        buttonHeight: PropTypes.number,
        buttonNameColor: PropTypes.string,
        buttonColor: PropTypes.string,
        buttonBorderColor: PropTypes.string,
    }
    static defaultProps = {
        buttonExpandInitialWidth: 250,
        buttonWidth: 250,
        buttonHeight: 50,
        buttonNameColor: '#004095',
        buttonColor: '#FFFFFF',
        buttonBorderColor: '#004095',
    }
    
    componentDidMount() {
        Animated.timing(this.state.expandWidth, {
            toValue: this.props.buttonWidth,
            duration: 500,
            easing: Easing.quad,
        }).start();
        Animated.timing(this.state.fadeIn, {
            toValue: 1,
            duration: 1200,
        }).start();
    }

    componentWillUnmount() {
        this.state.expandWidth.stopAnimation();
        this.state.fadeIn.stopAnimation();
    }

    render() {
        let text = this.props.buttonName
        let width = this.state.expandWidth
        let height = this.props.buttonHeight
        let fontSize = this.props.buttonHeight * 0.43
        let color = this.props.buttonNameColor
        let backgroundColor = this.props.buttonColor
        let borderColor = this.props.buttonBorderColor
        let opacity = this.state.fadeIn
        return (
            <Animated.View style={[styles.landButton, {
                width, height, backgroundColor, borderColor, opacity }]} >
                <TouchableOpacity style={styles.landTouchArea} onPress={this.props.onPressButton}>
                    <Animated.Text style={[{ fontSize, color, opacity }]}>
                        {text}
                    </Animated.Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

export class LinkButton extends Component {
    /**
     * @param props
     *  (Required)
     *      onPressButton:      ボタン押下時の動作
     *      buttonName:         ボタン名
     *  (Options) def→propDefaults
     *      buttonWidth:        ボタンの横幅        
     *      buttonHeight:       ボタンの縦幅
     *      buttonNameColor:    ボタン名の色
     */
    constructor(props) {
        super(props)
    }
    static propTypes = {
        buttonWidth: PropTypes.number,
        buttonHeight: PropTypes.number,
        buttonNameColor: PropTypes.string,
    }
    static defaultProps = {
        buttonWidth: 100,
        buttonHeight: 20,
        buttonNameColor: '#004095'
    }
    render() {
        let text = this.props.buttonName
        let color = this.props.buttonNameColor
        let width = this.props.buttonWidth
        let height = this.props.buttonHeight
        let fontSize = this.props.buttonHeight * 0.9
        return (
            <TouchableOpacity style={[{width, height}]} onPress={this.props.onPressButton}>
                <Text style={[styles.linkText, {fontSize, color}]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

export class HamburgerButton extends Component {
    /**
     * @param props
     *  (Required)
     *      onPressButton:  ボタン押下時の動作
     *  (Options) def→propDefaults 
     *      buttonColor:    ボタンの色
     */
    constructor(props) {
        super(props)
    }
    static propTypes = {
        buttonColor: PropTypes.string,
    }
    static defaultProps = {
        buttonColor: '#F4F4F4'
    }
    render() {
        let backgroundColor = this.props.buttonColor
        return (
            <TouchableOpacity style={styles.hamburgerArea} onPress={this.props.onPressButton}>
                <View style={[styles.hamburgerLine, {backgroundColor}]} />
                <View style={[styles.hamburgerLine, {backgroundColor}]} />
                <View style={[styles.hamburgerLine, {backgroundColor}]} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    linkText: {
        textAlign: 'center',
    },
    landTouchArea: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    landButton: {
        borderRadius: 30,
        borderWidth: 1,
    },
    hamburgerArea: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hamburgerLine: {
        width: 25,
        height: 3,
        margin: 2,
        borderRadius: 2,
    }
});