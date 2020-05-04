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
const header = {uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-and-richarlison-of-everton-celebrate-only-for-picture-id1209910938?s=2048x2048'}

export default class TeamNewsScreen extends Component {
    /**
     * @param props
     *      navigation: 画面遷移のオブジェクト
     *          (遷移先) 
     *              'Login': ログイン画面
     */
    UNSAFE_componentWillMount() {
        // TODO APIで試合結果をとりに行く
        // TODO チーム名を元にロゴを取得する
        // TODO プログレスアイコンを表示する
    }

    componentDidMount() {
        // TODO プログレスアイコンを消す
    }

    _onPressedMatch() {
        Alert.alert('This function under construction!')
    }

    _onPressedSeeMore() {
        Alert.alert('This function under construction!')
    }

    render() {
        return (
            <View>
                <CardHeader headerImage={header} />
                <View>
                    <View style={styles.matches}>
                        <Text style={[styles.titleText, { marginLeft: 10 }]} >
                            MATCHES
                        </Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <MatchesCard
                                onPressMatch={this._onPressedMatch.bind(this)}
                                matchDay='2020/04/12'
                                homeTeamName='EVERTON'
                                homeTeamGoals='2'
                                awayTeamName='LIVERPOOL'
                                awayTeamGoals='2' />
                            <MatchesCard />
                        </ScrollView>
                    </View>
                    <View style={styles.news}>
                        <Text style={[styles.titleText, { marginLeft: 10 }]} >
                            NEWS
                    </Text>
                        <ScrollView>
                            <NewsCard
                                onPressDetail={this._onPressedSeeMore.bind(this)}
                                newsImage={gomesImage}
                                title='アンドレ・ゴメスが esports の大会でスターリングに敗退！ああああああああああああああああああああああああああ'
                                newsDay='2019/20/20' />
                            <NewsCard />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    matches: {
        height: Dimensions.get('window').height * 0.23
    },
    news: {
        height: Dimensions.get('window').height * 0.67
    },
    titleText: {
        height: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004095',
    },
});