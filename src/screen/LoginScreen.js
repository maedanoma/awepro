import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types'
import RoundedButton, { ColorPattern } from '../components/button/RoundedButton'
import LinkButton from '../components/button/LinkButton'
import FadeExpand from '../components/animation/FadeExpand'
import Icon from '../components/Icon'
import { DimHeight, DimWidth, Div } from '../components/Layout'

/**
 * ログイン画面
 */
const LoginScreen = props => (
    <View>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.container} >
            <Icon />
            <Div div={70}/>
            <FadeExpand width={{ from: 50, to: 250 }} height={50} >
                <RoundedButton
                    onPress={() => {}}
                    name='Login'
                    colorPattern={ColorPattern.normal} />
            </FadeExpand>
            <Div div={10} />
            <FadeExpand width={{ from: 50, to: 250 }} height={50} >
                <RoundedButton
                    onPress={() => props.navigation.navigate('Home')}
                    name='Guest'
                    colorPattern={ColorPattern.reverse} />
            </FadeExpand>
            <Div div={30}/>
            <Text>アカウントを持っていませんか？</Text>
            <LinkButton
                onPress={() => {}}
                name='Sign Up'
                width={100}
                height={20} />
        </View>
    </View>
)

LoginScreen.propTypes = {
    // 画面遷移のオブジェクト
    //  'TeamNews': チームニュース画面
    navigation: PropTypes.object.isRequired
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        height: DimHeight,
        width: DimWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
});