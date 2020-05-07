import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    ImageBackground,
    Dimensions,
    Easing,
} from 'react-native';
import {
    HamburgerButton,
    MenuButton,
} from '../components/Button'

const menuButtons = [
    {
        id: 1,
        name: 'Home',
        // iconImage: require('../res/icon_home.jpg')
    },{
        id: 2,
        name: 'Matches',
        // iconImage: require('../res/icon_match.jpg')
    },{
        id: 3,
        name: 'News',
        // iconImage: require('../res/icon_news.jpg')
    },{
        id: 4,
        name: 'Other',
        // iconImage: require('../res/icon_other.jpg')
    }
]

export class CardHeader extends Component {
    /**
     * (Required)
     * @param props.onPressHbg  ボタン押下時の動作
     * @param props.headerImage ヘッダー画像
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
            useNativeDriver: false
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
        const menus = menuButtons.map((button) =>
            <View key={button.id} style={[{margin: 7}]}>
                <MenuButton buttonName={button.name} />
            </View>
        )
        return (
            <View style={styles.header}>
                <Animated.View style={[styles.headerImage, { opacity }]}>
                    <ImageBackground style={styles.headerImage} source={this.props.headerImage} >
                        <HbgButton />
                        {menus}
                    </ImageBackground>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('screen').height,
    },
    headerImage: {
        height: Dimensions.get('screen').height,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});