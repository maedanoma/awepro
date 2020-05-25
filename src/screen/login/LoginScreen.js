import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types'
import Button from '../../components/button/Button'
import Icon from '../../components/Icon'
import Fade from '../../components/animation/Fade'
import ExpandHorizontal from '../../components/animation/expand/ExpandHorizontal'
import { DimHeight, DimWidth, Div } from '../../components/Layout'

const FadeExpand = props => (
    <Fade>
        <ExpandHorizontal style={[{}]} sets={{ from: 50, to: 250 }} startWhen={true} >
            {props.children}
        </ExpandHorizontal>
    </Fade>
)

/**
 * ログイン画面
 */
const LoginScreen = props => (
    <View>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.container} >
            <Icon />
            <Div div={70} />
            <FadeExpand>
                <Button style={styles.login}
                    onPress={() => { }}
                    name='Login' />
            </FadeExpand>
            <Div div={10} />
            <FadeExpand>
                <Button style={styles.guest}
                    onPress={() => {
                        console.log("aaaaaaaaaaaaaaa")
                        props.navigation.navigate('Home')}}
                    name='Guest'
                    nameColor='#4689FF' />
            </FadeExpand>
            <Div div={30} />
            <Text style={[{color: '#CCCCCC'}]}>アカウントを持っていませんか？</Text>
            <Button style={styles.link}
                onPress={() => { }}
                name='Sign Up'
                nameColor='#4689FF'
                fontSize={17} />
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
        justifyContent: 'center',
        backgroundColor: '#333333'
    },
    login: {
        height: 50,
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#4689FF',
        // borderColor: '#004095',
        // borderWidth: 1,
    },
    guest: {
        height: 50,
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#CCCCCC',
        // borderColor: '#004095',
        // borderWidth: 1,
    },
    link: {
        width: 100,
        height: 20,
    }
});