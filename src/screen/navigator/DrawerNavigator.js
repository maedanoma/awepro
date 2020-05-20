import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import ToggleMenuContext from './store/ToggleMenuStore'
import MenuContext from './store/MenusStore'
import { DimHeight, DimWidth } from '../../components/Layout'
import MoveHorizontal from '../../components/animation/MoveHorizontal'
import BackgroundMenu from './BackgroundMenu'

/**
 * ログイン後に表示されるDrawerMenuをもつComponent
 */
const DrawerNavigator = observer(() => {
    let { closeMenu, leftPosition } = React.useContext(ToggleMenuContext)
    let { menu } = React.useContext(MenuContext)
    return (
        <View>
            <BackgroundMenu />
            <MoveHorizontal style={styles.view} x={leftPosition}>
                <TouchableOpacity  style={styles.container} onPress={closeMenu} >
                    {menu.component}
                </TouchableOpacity>
            </MoveHorizontal>
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
        width: '100%'
    },
    view: {
        position: 'absolute',
        top: DimHeight* 0.085,
        height: DimHeight * 0.94,
        width: DimWidth,
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});