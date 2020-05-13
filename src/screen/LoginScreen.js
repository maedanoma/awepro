import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    StatusBar,
    Dimensions,
} from 'react-native';
import {
    RoundedButton,
    LinkButton
} from '../components/Button'
import Icon from '../components/Icon'

/**
 * 最初に表示されるログイン画面
 */
export default class LoginScreen extends Component {
    /**
     * @param props.navigation: 画面遷移のオブジェクト
     *                          - 'TeamNews': チームニュース画面
     */
    constructor(props) {
        super(props)
    }
    /**
     * LoginCardを表示する
     */
    _login() {
        Alert.alert('This function under construction!')
    };

    /**
     * ゲストユーザーとしてホームに遷移する
     */
    _loginAsGuest() {
        this.props.navigation.navigate('Home')
    };

    /**
     * SignUpCardを表示する
     */
    _signUp() {
        Alert.alert('This function under construction!')
    };

    render() {
        return (
            <View style={styles.container} >
                <StatusBar translucent backgroundColor="transparent"/>
                <View style={{marginTop: 170}}>
                    <Icon />
                </View>
                <View style={[styles.button, { marginTop: 70}]}>
                    <RoundedButton
                        onPressButton={this._login.bind(this)}
                        buttonName='Login'
                        buttonNameColor='#FFFFFF'
                        buttonColor='#004095'
                        buttonBorderColor='#004095'
                        buttonExpandInitialWidth={40} />
                </View>
                <View style={[styles.button, { marginTop: 10}]}>
                    <RoundedButton
                        onPressButton={this._loginAsGuest.bind(this)}
                        buttonName='Guest'
                        buttonExpandInitialWidth={40} />
                </View>
                <View style={[styles.button, { marginTop: 30 }]}>
                    <Text>アカウントを持っていませんか？</Text>
                    <LinkButton
                        onPressButton={this._signUp.bind(this)}
                        buttonName='Sign Up' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});