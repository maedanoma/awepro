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
} from 'react-native';
import {MatchesCard} from '../components/Card'

const everton = require('../res/login_everton.jpg')
const liverpool = require('../res/liverpool_logo.jpg')

export default class TeamNewsScreen extends Component {
    _details() {
        Alert.alert('This function under construction!')
    }
    
    UNSAFE_componentWillMount() {
        // TODO APIで試合結果をとりに行く
        // TODO チーム名を元にロゴを取得する
        // TODO プログレスアイコンを表示する
    }

    componentDidMount() {
        // TODO プログレスアイコンを消す
    }

    render() {

        return (
            <View style={styles.container} >
                <Text style={[styles.titleText, {marginLeft: 10}]} >
                    MATCHES
                </Text>
                <ScrollView
                    style={styles.matches}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <MatchesCard
                        onPressDetails={this._details}
                        matchDay='2020/04/12'
                        homeTeamName='EVE'
                        homeTeamLogo={everton}
                        homeTeamGoals='2'
                        awayTeamName='CRY'
                        awayTeamLogo={everton}
                        awayTeamGoals='2'/>
                    <MatchesCard />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#004095',
    },
    matches: {
        width: '100%',
    }
});