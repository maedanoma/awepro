/**
 * Login UI
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
} from 'react-native';
import {
    LandscapeButton,
    LinkButton
} from '../components/Button'
import Icon from '../components/Icon'

export default class LoginScreen extends Component {
    /**
     * @param props
     *      navigation: 画面遷移のオブジェクト
     *          (遷移先) 
     *              'TeamNews': チームニュース画面
     */
    constructor(props) {
        super(props)
    }
    _login() {
        Alert.alert('This function under construction!')
    };

    _loginAsGuest() {
        this.props.navigation.navigate('TeamNews')
    };

    _signUp() {
        Alert.alert('This function under construction!')
    };

    render() {
        return (
            <View style={styles.container} >
                <View style={{marginTop: 170}}>
                    <Icon />
                </View>
                <View style={[styles.button, { marginTop: 70}]}>
                    <LandscapeButton
                        onPressButton={this._login.bind(this)}
                        buttonName='Login'
                        buttonNameColor='#FFFFFF'
                        buttonColor='#004095'
                        buttonBorderColor='#004095'
                        buttonExpandInitialWidth={40} />
                </View>
                <View style={[styles.button, { marginTop: 10}]}>
                    <LandscapeButton
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
        width: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});