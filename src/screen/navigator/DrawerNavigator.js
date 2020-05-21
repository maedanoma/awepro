import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Easing
} from 'react-native';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import ToggleMenuContext from './store/ToggleMenuStore'
import MenuContext from './store/MenusStore'
import { DimHeight, DimWidth, Div } from '../../components/Layout'
import SlideHorizontal from '../../components/animation/slide/SlideHorizontal'
import BackgroundMenu from './BackgroundMenu'
import MenuButton from '../../components/button/MenuButton'

/**
 * ログイン後に表示されるDrawerMenuをもつComponent
 */
const DrawerNavigator = observer(() => {
    let { closeMenu, leftPosition, toggleMenu } = React.useContext(ToggleMenuContext)
    let { menu } = React.useContext(MenuContext)
    return (
        <View>
            <BackgroundMenu />
            <SlideHorizontal style={[styles.view]} x={leftPosition} easing={Easing.bounce}>
                <TouchableOpacity  style={styles.container} onPress={closeMenu} >
                    <Div div={DimHeight * 0.035} />
                    <Text style={styles.title}>{menu.name}</Text>
                    <MenuButton style={[styles.menu]} onPress={toggleMenu} />
                    {menu.component}
                </TouchableOpacity>
            </SlideHorizontal>
        </View>
    );
})

DrawerNavigator.propTypes = {
    // ログイン画面とメイン画面の遷移オブジェクト
    //  - 'Login':  ログイン画面
    //  - 'Home':   ホーム画面
    navigation: PropTypes.object.isRequired,
}

export default DrawerNavigator

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#333333',
    },
    view: {
        height: DimHeight,
        width: DimWidth,
        backgroundColor: '#333333',
        top: 0,
        position: 'absolute'
    },
    menu: {
        top: DimHeight * 0.035,
        left: 8,
        position: 'absolute'
    },
    title: {
        width: DimWidth,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4689FF',
        textAlign: 'center',
    }
});