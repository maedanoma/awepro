import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    Easing,
    Animated,
    Dimensions,
} from 'react-native';
import { CardScrollView } from '../components/ScrollView'
import {
    MatchesCard,
    NewsCard,
} from '../components/Card'
import { ProgressBar } from '../components/Progress'
import { updateAllMatchesInSeason } from '../http/MatchApis'

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
    componentDidMount() {
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
                    <Fixtures onPressMatch={this._onPressMatch.bind(this)} />
                </View>
                <View style={styles.news}>
                    <Text style={styles.titleText}>NEWS</Text>
                    <CardScrollView
                        cardHeight={355} >
                        <NewsCard
                            onPressSeeMore={this._onPressSeeMore.bind(this)}
                            newsImage={gomesImage}
                            title='アンドレ・ゴメスが esports の大会でスターリングに敗退！ああああああああああああああああああああああああああ'
                            newsDay='2019/20/20' />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </CardScrollView>
                </View>
            </Animated.View>
        );
    }
}

class Fixtures extends Component {
    /**
     * @param props.onPressMatch    MatchCardが押下された時の動作
     * @param state.fixtures        MatchCardに表示する試合結果
     */
    constructor(props) {
        super(props)
        this.state = {
            fixtures: []
            // fixtures: [
            //     {
            //         event_date: "2019-08-10T14:00:00+00:00",
            //         league: {
            //             name: "Premier League"
            //         },
            //         homeTeam: {
            //             team_name: "Crystal Palace",
            //             logo: "https://media.api-sports.io/football/teams/52.png"
            //         },
            //         goalsHomeTeam: 0,
            //         awayTeam: {
            //             team_name: "Everton",
            //             logo: "https://media.api-sports.io/football/teams/45.png"
            //         },
            //         goalsAwayTeam: 0,
            //     }
            // ],
        }
    }
    UNSAFE_componentWillMount() {
        // API-Football で試合結果を取る
        updateAllMatchesInSeason(this._updateFixtures.bind(this))
    }
    _updateFixtures(allMatches) {
        allMatches == null ? null : this.setState({ fixtures: allMatches.reverse() })
    }
    render() {
        let fixtures = this.state.fixtures
        const displayMatches = fixtures.map(fixture => (
            <MatchesCard
                key={fixture.fixture_id}
                onPressMatch={this.props.onPressMatch}
                fixture={fixture} />
        ))
        return (
            <View>
                <Text style={styles.titleText}>FIXTURES</Text>
                {
                    fixtures.length == 0 ?
                        <View style={styles.matchesArea}>
                            <ProgressBar message='fetch fixtures...' />
                        </View>
                        :
                        <CardScrollView
                            initialCardPosition={0}
                            horizontal={true}
                            cardWidth={240}
                            cardAlign='left'>
                            { displayMatches }
                        </CardScrollView>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    matches: {
        height: Dimensions.get('window').height * 0.23,
        marginTop: Dimensions.get('window').height * 0.015
    },
    matchesArea: {
        height: Dimensions.get('window').height * 0.23 - 25,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    news: {
        height: Dimensions.get('window').height * 0.66
    },
    news: {
        height: Dimensions.get('window').height * 0.66 - 25,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        height: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004095',
        textAlign: 'center'
    },
});
