import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Animated,
    Easing,
    TouchableOpacity,
} from 'react-native';
import {
    HamburgerButton,
    LinkButton,
} from '../components/Button'
import TeamNews from './TeamNewsScreen'
import Members from './MembersScreen'

// const header = {uri: 'https://media.gettyimages.com/photos/richarlison-of-everton-celebrates-with-teammates-after-scoring-his-picture-id1208180963?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dan-gosling-of-everton-is-congratulated-by-teammate-leighton-baines-picture-id84650304?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-of-everton-celebrates-with-teammates-after-his-picture-id1192480863?s=2048x2048'}
const header = { uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-and-richarlison-of-everton-celebrate-only-for-picture-id1209910938?s=2048x2048' }

const menuButtons = [
    { id: 1,　name: 'Home' },
    { id: 2,　name: 'Members' },
    { id: 3,　name: 'News' },
    { id: 4,　name: 'Other' }
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
            status: 'Home',
            headerImageOpacity: new Animated.Value(0),
            drawerLeft: new Animated.Value(0),
            isDisplayDrawer: false
        }
    }

    componentDidMount() {
        Animated.timing(this.state.headerImageOpacity, {
            toValue: 1,
            duration: 300,
            easing: Easing.quad,
            useNativeDriver: false
        }).start();
    }

    componentWillUnmount() {
        Animated.timing(this.state.headerImageOpacity).stop()
        Animated.timing(this.state.drawerLeft).stop()
    }

    /**
     * DrawerMenuを選択した時に次の画面に遷移する  
     * 
     * setStateで次の遷移先を設定しする  
     * 再描画してMainCardの中身を変更する  
     * DrawerMenuは閉じる
     * @param screenName menuButtonsに設定されているname 
     */
    _dispatchScreen(screenName) {
        this.setState({
            status: screenName,
            isDisplayDrawer: false
        })
        this._toggleDrawer()
    }

    /**
     * HbgMenuが押された時に
     * DrawerMenuを開いたり閉じたりする
     */
    _onPressDrawer() {
        this.setState(previousState => ({
            isDisplayDrawer: !previousState.isDisplayDrawer,
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

    /**
     * DrawerMenuを開いたり閉じたりする
     */
    _toggleDrawer() {
        let isDisplayDrawer = this.state.isDisplayDrawer
        let drawerWidth = Dimensions.get('screen').width * 0.6
        Animated.timing(this.state.drawerLeft, {
            toValue: isDisplayDrawer? 0: drawerWidth,
            duration: 500,
            easing: Easing.exp,
            useNativeDriver: false
        }).start()
    }

    /**
     * _dispatchScreenの後に実際にMainCardの画面を切り替える
     */
    _switchScreen() {
        if(this.state.status == 'Home') return (<TeamNews closeDrawer={this._closeDrawer.bind(this)}/>)
        if(this.state.status == 'Members') return (<Members closeDrawer={this._closeDrawer.bind(this)}/>)
    }

    render() {
        let opacity = this.state.headerImageOpacity
        let left = this.state.drawerLeft
        const HbgButton = () => (
            <View style={[{margin: 10}]}>
                <HamburgerButton onPressButton={this._onPressDrawer.bind(this)} />
            </View>
        )
        const menus = menuButtons.map((button) =>
            <View key={button.id} style={[{margin: 7}]}>
                <LinkButton
                    buttonName={button.name}
                    buttonNameColor='#FFFFFF'
                    buttonBold={true}
                    buttonHeight={25}
                    buttonWidth={200}
                    onPressButton={this._dispatchScreen.bind(this, button.name)}/>
            </View>
        )
        return (
            <View>
                <View style={styles.header}>
                    <Animated.View style={[styles.headerImage, { opacity }]}>
                        <ImageBackground style={styles.headerImage} source={header} >
                            <HbgButton />
                            {menus}
                        </ImageBackground>
                    </Animated.View>
                </View>
                <Animated.View style={[styles.container, { left }]}>
                    <TouchableOpacity onPress={this._closeDrawer.bind(this)} activeOpacity={1}>
                        {this._switchScreen()}
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('screen').height,
    },
    headerImage: {
        height: Dimensions.get('screen').height,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.06,
        height: Dimensions.get('screen').height * 0.94,
        width: Dimensions.get('screen').width,
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});