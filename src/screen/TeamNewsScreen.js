/**
 * TeamNews UI
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Alert,
    Dimensions,
    Animated,
    Easing,
    TouchableOpacity,
} from 'react-native';
import {
    MatchesCard,
    NewsCard,
} from '../components/Card'
import { CardHeader } from '../components/Header'

const gomesImage = { uri: 'https://media.gettyimages.com/photos/kurt-zouma-of-everton-celebrates-after-scoring-his-teams-first-goal-picture-id1081775044?s=2048x2048' }
// const header = {uri: 'https://media.gettyimages.com/photos/richarlison-of-everton-celebrates-with-teammates-after-scoring-his-picture-id1208180963?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dan-gosling-of-everton-is-congratulated-by-teammate-leighton-baines-picture-id84650304?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-of-everton-celebrates-with-teammates-after-his-picture-id1192480863?s=2048x2048'}
const header = { uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-and-richarlison-of-everton-celebrate-only-for-picture-id1209910938?s=2048x2048' }

export default class TeamNewsScreen extends Component {
    /**
     * @param props
     *      navigation: 画面遷移のオブジェクト
     *          (遷移先) 
     *              'Login': ログイン画面
     */
    constructor(props) {
        super(props)
        this.state = {
            drawerLeft: new Animated.Value(0),
            isDisplayDrawer: false
        }
    }

    UNSAFE_componentWillMount() {
        // TODO APIで試合結果をとりに行く
        // TODO チーム名を元にロゴを取得する
        // TODO プログレスアイコンを表示する
    }

    componentDidMount() {
        // TODO プログレスアイコンを消す
    }

    componentWillUnmount() {
        Animated.timing(this.state.drawerLeft).stop()
    }

    _onPressView() {
        this._closeDrawer()
    }

    _onPressMatch() {
        this._closeDrawer()
        Alert.alert('This function under construction!')
    }

    _onPressSeeMore() {
        this._closeDrawer()
        Alert.alert('This function under construction!')
    }

    _onPressDrawer() {
        this.setState(previousState => ({
            isDisplayDrawer: !previousState.isDisplayDrawer,
        }))
        this._draw()
    }

    _closeDrawer() {
        if (!this.state.isDisplayDrawer) return
        this.setState({ isDisplayDrawer: false })
        this._draw()
    }

    _draw() {
        let isDisplayDrawer = this.state.isDisplayDrawer
        let drawerWidth = Dimensions.get('screen').width * 0.6
        Animated.timing(this.state.drawerLeft, {
            toValue: isDisplayDrawer? 0: drawerWidth,
            duration: 500,
            easing: Easing.exp,
            useNativeDriver: false
        }).start()
    }

    render() {
        let left = this.state.drawerLeft
        return (
            <View>
                <CardHeader onPressHbg={this._onPressDrawer.bind(this)} headerImage={header} />
                <Animated.View style={[styles.container, { left }]}>
                    <TouchableOpacity onPress={this._onPressView.bind(this)} activeOpacity={1}>
                        <View style={styles.matches}>
                            <Text style={styles.titleText} >MATCHES</Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <MatchesCard
                                    onPressMatch={this._onPressMatch.bind(this)}
                                    matchDay='2020/04/12'
                                    homeTeamName='EVERTON'
                                    homeTeamGoals='2'
                                    awayTeamName='LIVERPOOL'
                                    awayTeamGoals='2' />
                                <MatchesCard />
                            </ScrollView>
                        </View>
                        <View style={styles.news}>
                            <Text style={styles.titleText}>NEWS</Text>
                            <ScrollView>
                                <NewsCard
                                    onPressSeeMore={this._onPressSeeMore.bind(this)}
                                    newsImage={gomesImage}
                                    title='アンドレ・ゴメスが esports の大会でスターリングに敗退！ああああああああああああああああああああああああああ'
                                    newsDay='2019/20/20' />
                                <NewsCard />
                            </ScrollView>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.06,
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    matches: {
        height: Dimensions.get('window').height * 0.23,
        marginTop: Dimensions.get('window').height * 0.015
    },
    news: {
        height: Dimensions.get('window').height * 0.66
    },
    titleText: {
        height: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004095',
        textAlign: 'center'
    },
});