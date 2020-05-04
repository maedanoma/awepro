import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    ImageBackground,
    Dimensions,
    Easing,
} from 'react-native';
import { HamburgerButton } from '../components/Button'

export class CardHeader extends Component {
    /**
     * @param props
     *  (Required)
     *      onPressHbg:     ボタン押下時の動作
     *      headerImage:    ヘッダー画像
     */
    constructor(props) {
        super(props)
        this.state = {
            headerImageOpacity: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(this.state.headerImageOpacity, {
            toValue: 1,
            duration: 2500,
            easing: Easing.quad,
        }).start();
    }

    componentWillUnmount() {
        this.state.headerImageOpacity.stopAnimation();
    }

    render() {
        let opacity = this.state.headerImageOpacity
        const HbgButton = () => (
            <View style={[{margin: 10}]}>
                <HamburgerButton onPressButton={this.props.onPressHbg} />
            </View>
        );
        return (
            <View style={styles.header}>
                <Animated.View style={[styles.headerImage, { opacity }]}>
                    <ImageBackground style={styles.headerImage}
                        source={this.props.headerImage} >
                        <HbgButton />
                    </ImageBackground>
                </Animated.View>
                <View style={styles.headerCard} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('screen').height * 0.075,
    },
    headerImage: {
        height: Dimensions.get('screen').height * 0.1,
    },
    headerCard: {
        height: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').width,
        borderRadius: 20,
        backgroundColor: '#F4F4F4',
        translateY: -(Dimensions.get('screen').height * 0.04),
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});