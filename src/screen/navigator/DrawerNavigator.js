import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { DimHeight, DimWidth, Div } from '../../components/Layout'
import MoveHorizontal from '../../components/animation/MoveHorizontal'
import TeamNews from '../teamNews/TeamNewsScreen'
import Members from '../MembersScreen'
import BackgroundMenu, { Menus } from './BackgroundMenu'

// const header = {uri: 'https://media.gettyimages.com/photos/richarlison-of-everton-celebrates-with-teammates-after-scoring-his-picture-id1208180963?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dan-gosling-of-everton-is-congratulated-by-teammate-leighton-baines-picture-id84650304?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-of-everton-celebrates-with-teammates-after-his-picture-id1192480863?s=2048x2048'}
const header = { uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-and-richarlison-of-everton-celebrate-only-for-picture-id1209910938?s=2048x2048' }

const menuButtons = [
    { id: 1,　name: 'Home', component: <TeamNews/> },
    { id: 2,　name: 'Members', component: <Members/> },
    { id: 3,　name: 'News', component: <Members/> },
    { id: 4,　name: 'Other', component: <Members/> }
]

/**
 * ログイン後に表示されるDrawerMenuをもつComponent
 */
export default class DrawerNavigator extends Component {
    /**
     * @param props.navigation          ログイン画面とメイン画面の遷移オブジェクト
     *                                  - 'Login':  ログイン画面
     *                                  - 'Home':   ホーム画面
     * @param state.
     * @param state.headerImageOpacity  ヘッダーのopacity
     * @param state.drawerLeft          メインのカードの左の位置
     *                                  DrawerMenuが開いた時の幅になる
     * @param state.isDisplayDrawer     DrawerMenuが表示されているかどうか
     */
    constructor(props) {
        super(props)
        this.state = {
            status: menuButtons[0],
            drawerLeft: 0,
        }
    }

    /**
     * HbgMenuが押された時に
     * DrawerMenuを開いたり閉じたりする
     */
    _onPressDrawer() {
        let drawerWidth = Dimensions.get('screen').width * 0.6
        console.log('onPressDrawer'),
        this.setState(prev => (
            console.log('prev state = ' + prev.drawerLeft),
            {
            drawerLeft: prev.drawerLeft == 0? drawerWidth: 0
        }))
        this._toggleDrawer()
    }

    /**
     * DrawerMenuを閉じる
     */
    _closeDrawer() {
        if (!this.state.isDisplayDrawer) return
        this.setState({ isDisplayDrawer: false })
        this._toggleDrawer()
    }

    render() {
        return (
            <View>
                <BackgroundMenu
                    onPressDrawer={this._onPressDrawer.bind(this)}
                    onPressMenu={menu => {
                        this.setState({ status: menu })}} />
                <MoveHorizontal style={styles.container} x={this.state.drawerLeft}>
                    <TouchableOpacity  style={styles.view} onPress={()=>{}} >
                        {this.state.status.component}
                    </TouchableOpacity>
                </MoveHorizontal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: DimHeight,
        width: DimWidth
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
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