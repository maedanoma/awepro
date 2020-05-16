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
    
} from '../components/button/Button'
import RoundedButton, { ColorPattern } from '../components/button/RoundedButton'
import LinkButton from '../components/button/LinkButton'
import { FadeExpand } from '../components/animation/Expand'
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
                    <FadeExpand width={{from:50, to:250}} height={50} >  
                        <RoundedButton
                            onPress={this._login.bind(this)}
                            name='Login'
                            colorPattern={ColorPattern.normal} />
                    </FadeExpand>  
                </View>
                <View style={[styles.button, { marginTop: 10}]}>
                    <FadeExpand width={{from:50, to:250}} height={50} >  
                        <RoundedButton
                            onPress={this._loginAsGuest.bind(this)}
                            name='Guest'
                            colorPattern={ColorPattern.reverse} />
                    </FadeExpand>
                </View>
                <View style={[styles.button, { marginTop: 30 }]}>
                    <Text>アカウントを持っていませんか？</Text>
                    <LinkButton
                        onPress={this._signUp.bind(this)}
                        name='Sign Up'
                        width={100}
                        height={20} />
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