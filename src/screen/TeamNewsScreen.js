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
    HeaderCard,
} from '../components/Card'

const everton = require('../res/login_everton.jpg')
const liverpool = require('../res/liverpool_logo.jpg')

export default class TeamNewsScreen extends Component {
    UNSAFE_componentWillMount() {
        // TODO APIで試合結果をとりに行く
        // TODO チーム名を元にロゴを取得する
        // TODO プログレスアイコンを表示する
    }

    componentDidMount() {
        // TODO プログレスアイコンを消す
    }

    _details() {
        Alert.alert('This function under construction!')
    }

    render() {
        return (
            <View>
                <HeaderCard />
                <View>
                    <View style={styles.matches}>
                        <Text style={[styles.titleText, { marginLeft: 10 }]} >
                            MATCHES
                        </Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <MatchesCard
                                onPressDetails={this._details}
                                matchDay='2020/04/12'
                                homeTeamName='EVE'
                                homeTeamLogo={everton}
                                homeTeamGoals='2'
                                awayTeamName='LIV'
                                awayTeamLogo={liverpool}
                                awayTeamGoals='2' />
                            <MatchesCard />
                        </ScrollView>
                    </View>
                    <View style={styles.news}>
                        <Text style={[styles.titleText, { marginLeft: 10 }]} >
                            NEWS
                    </Text>
                        <ScrollView>
                            <NewsCard />
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
        height: Dimensions.get('window').height * 0.25
    },
    news: {
        height: Dimensions.get('window').height * 0.65
    },
    titleText: {
        height: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004095',
    },
});