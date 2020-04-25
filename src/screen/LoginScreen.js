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
    _login = () => {
        Alert.alert('This function under construction!')
    };

    _loginAsGuest = () => {
        Alert.alert('You tapped login as guest!')
    };

    _signUp = () => {
        Alert.alert('This function under construction!')
    };

    render() {
        const LoginButton = () => (
            <LandscapeButton
                onPressButton={this._login}
                text='Login'
                backgroundColor='#004095'
                borderColor='#004095'
                color='#FFFFFF' />
        );
        const GuestButton = () => (
            <LandscapeButton
                onPressButton={this._loginAsGuest}
                text='Guest'
                backgroundColor='#FFFFFF'
                borderColor='#004095'
                color='#004095' />
        );
        const SignUpButton = () => (
            <LinkButton
                onPressButton={this._signUp}
                text='Sign Up'
                color='#004095' />
        );
        return (
            <View style={styles.container} >
                <View style={{marginTop: 170}}>
                    <Icon style/>
                </View>
                <View style={[styles.button, { marginTop: 70}]}>
                    <LoginButton />
                </View>
                <View style={[styles.button, { marginTop: 10}]}>
                    <GuestButton />
                </View>
                <View style={[styles.button, { marginTop: 30 }]}>
                    <Text>アカウントを持っていませんか？</Text>
                    <SignUpButton />
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