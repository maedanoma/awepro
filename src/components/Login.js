/**
 * Login UI
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Alert,
} from 'react-native';
import {
    LandscapeButton,
    LinkButton
} from './Button'

const backImage = require('../res/login_everton.jpg')

const Login: () => React$Node = () => {
    const _login = () => {
        Alert.alert('You tapped login!')
    };

    const _loginAsGuest = () => {
        Alert.alert('You tapped login as guest!')
    };

    const _signUp = () => {
        Alert.alert('You tapped sign up!')
    };

    const LoginButton = () => (
        <LandscapeButton
            onPressButton={_login}
            text='Login'
            backgroundColor='#004095'
            borderColor='#004095'
            color='#FFFFFF' />
    );
    const GuestButton = () => (
        <LandscapeButton
            onPressButton={_loginAsGuest}
            text='Guest'
            backgroundColor='#FFFFFF'
            borderColor='#004095'
            color='#004095' />
    );
    const SignUpButton = () => (
        <LinkButton
            onPressButton={_signUp}
            text='Sign Up'
            color='#004095' />
    );
    return (
        <View style={styles.container} >
            <ImageBackground source={backImage} style={styles.image} />
            <View style={{ margin: 80 }}>
                <LoginButton />
            </View>
            <View style={{ margin: -60 }}>
                <GuestButton />
            </View>
            <View style={{ margin: 90, alignItems: 'center', }}>
                <Text>アカウントを持っていませんか？</Text>
                <SignUpButton />
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 100,
        opacity: 1.0,
        resizeMode: "cover",
        flexDirection: "column",
        alignItems: 'center',
    },
});