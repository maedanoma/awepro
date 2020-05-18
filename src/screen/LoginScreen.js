import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types'
import Button from '../components/button/Button'
import { FadeExpand } from '../components/animation/Motions'
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
                <Button style={styles.login}
                    onPress={() => {}} 
                    name='Login' />
            </FadeExpand>
            <Div div={10} />
            <FadeExpand width={{ from: 50, to: 250 }} height={50} >
                <Button style={styles.guest}
                    onPress={() => props.navigation.navigate('Home')}
                    name='Guest'
                    nameColor='#004095' />
            </FadeExpand>
            <Div div={30}/>
            <Text>アカウントを持っていませんか？</Text>
            <Button style={styles.link}
                onPress={() => {}}
                name='Sign Up'
                nameColor='#004095'
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
        justifyContent: 'center'
    },
    login: {
        height: '100%',
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#004095',
        borderColor: '#004095',
        borderWidth: 1,
    },
    guest: {
        height: '100%',
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        borderColor: '#004095',
        borderWidth: 1,
    },
    link: {
        width: 100,
        height: 20
    }
});