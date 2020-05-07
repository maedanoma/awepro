import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Alert,
    Easing,
    Animated,
    Dimensions,
} from 'react-native';
import {
    MatchesCard,
    NewsCard,
} from '../components/Card'

const gomesImage = { uri: 'https://media.gettyimages.com/photos/kurt-zouma-of-everton-celebrates-after-scoring-his-teams-first-goal-picture-id1081775044?s=2048x2048' }

export default class TeamNewsScreen extends Component {
    /**
     * @param props.closeDrawer DrowerMenuを閉じる 
     * @param state.viewOpacity 遷移後にMainCardのopacity
     */
    constructor(props) {
        super(props)
        this.state = {
            viewOpacity: new Animated.Value(0),
        }
    }

    UNSAFE_componentWillMount() {
        // TODO APIで試合結果をとりに行く
        // TODO チーム名を元にロゴを取得する
        // TODO プログレスアイコンを表示する
    }

    componentDidMount() {
        // TODO プログレスアイコンを消す
        Animated.timing(this.state.viewOpacity, {
            toValue: 1,
            duration: 500,
            easing: Easing.exp,
            useNativeDriver: false
        }).start()
    }

    componentWillUnmount() {
        Animated.timing(this.state.viewOpacity).stop()
    }

    /**
     * MatchCardを押された時にMatchの詳細を表示する
     * 
     * DrawerMenuも閉じる
     */
    _onPressMatch() {
        this.props.closeDrawer()
        Alert.alert('This function under construction!')
    }

    /**
     * NewsCardまたはSeeMoreが押された時にNewsの詳細を表示する
     * 
     * DrawerMenuも閉じる
     */
    _onPressSeeMore() {
        this.props.closeDrawer()
        Alert.alert('This function under construction!')
    }

    render() {
        let opacity = this.state.viewOpacity
        return (
            <Animated.View style={[{ opacity }]}>
                <View style={styles.matches}>
                    <Text style={styles.titleText}>MATCHES</Text>
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
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
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