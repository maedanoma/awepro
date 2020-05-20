import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
    Easing,
    Animated,
    Dimensions,
} from 'react-native'
import { updateAllMatchesInSeason } from '../../http/FootballApi'
import { updateNews } from '../../http/GoogleNewsApi'
import NewsCard from './NewsCard'
import FixtureCard from './FixtureCard'
import CardList from '../../components/card/CardList'
import { TitleLabel } from '../../components/text/Text'

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
                    <Fixtures onPress={this._onPressMatch.bind(this)} />
                </View>
                <View style={styles.news}>
                    <News onPress={this._onPressSeeMore.bind(this)} />
                </View>
            </Animated.View>
        );
    }
}

class Fixtures extends Component {
    /**
     * @param props.onPress    MatchCardが押下された時の動作
     * @param state.fixtures        MatchCardに表示する試合結果
     * @param state.initCardPos     Matchesで表示するデフォルトのMatchCardの位置
     * @param state.isDisplayError  エラーを表示するかどうか
     */
    constructor(props) {
        super(props)
        this.state = {
            isDisplayError: false,
            initCardPos: 0,
            // fixtures: []
            fixtures: [
                {
                    event_date: "2019-08-10T14:00:00+00:00",
                    league: {
                        name: "Premier League"
                    },
                    homeTeam: {
                        team_name: "Crystal Palace",
                        logo: "https://media.api-sports.io/football/teams/52.png"
                    },
                    goalsHomeTeam: 0,
                    awayTeam: {
                        team_name: "Everton",
                        logo: "https://media.api-sports.io/football/teams/45.png"
                    },
                    goalsAwayTeam: 0,
                }
            ],
        }
    }
    UNSAFE_componentWillMount() {
        // API-Football で試合結果を取る
        updateAllMatchesInSeason(this._updateFixtures.bind(this))
    }
    _updateFixtures(allMatches) {
        allMatches == null || allMatches.length == 0 ?
            this.setState({ isDisplayError: true}) : 
            initPos = allMatches.filter(match => {
                return match.status == "Match Postponed"
            }).length
            this.setState({
                fixtures: allMatches.reverse(),
                initCardPos: initPos
            })
    }
    render() {
        let fixtures = this.state.fixtures
        const displayMatches = fixtures.map(fixture => (
            <FixtureCard
                key={fixture.fixture_id}
                onPress={this.props.onPress}
                fixture={fixture} />
        ))
        return (
            <View>
            <TitleLabel>FIXTURES</TitleLabel>
            <CardList
                initialCardPosition={this.state.initCardPos}
                horizontal={true}
                cardWidth={240}
                cardAlign='left'
                contents={fixtures}
                isFailed={this.state.isDisplayError}>
                { displayMatches }
            </CardList>
            </View>
        )
    }
}

class News extends Component {
    /**
     * @param props.onPress     NewsCardが押下された時の動作
     * @param state.newsList        NewsCardに表示するニュース
     * @param state.isDisplayError  エラーを表示するかどうか
     */
    constructor(props) {
        super(props)
        this.state = {
            isDisplayError: false,
            // newsList: []
            newsList: [
                    {
                        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
                        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
                        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
                        "image":"https:\/\/images.gnews.io\/65bce391fc91d65d73d75370115563b8",
                        "publishedAt":"2020-05-12 04:36:00 UTC",
                        "source":{
                            "name":"sportwitness.co.uk",
                            "url":"https:\/\/sportwitness.co.uk"
                        }
                    },
                    {
                        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
                        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
                        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
                        "image":"https:\/\/images.gnews.io\/65bce391fc91d65d73d75370115563b8",
                        "publishedAt":"2020-05-12 04:36:00 UTC",
                        "source":{
                            "name":"sportwitness.co.uk",
                            "url":"https:\/\/sportwitness.co.uk"
                        }
                    },
                    {
                        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
                        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
                        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
                        "image":"https:\/\/images.gnews.io\/65bce391fc91d65d73d75370115563b8",
                        "publishedAt":"2020-05-12 04:36:00 UTC",
                        "source":{
                            "name":"sportwitness.co.uk",
                            "url":"https:\/\/sportwitness.co.uk"
                        }
                    },
                    {
                        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
                        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
                        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
                        "image":"https:\/\/images.gnews.io\/65bce391fc91d65d73d75370115563b8",
                        "publishedAt":"2020-05-12 04:36:00 UTC",
                        "source":{
                            "name":"sportwitness.co.uk",
                            "url":"https:\/\/sportwitness.co.uk"
                        }
                    },
                ]
        }
    }
    UNSAFE_componentWillMount() {
        // NewsAPI でニュースを取る
        updateNews(this._updateNews.bind(this))
    }
    _updateNews(allNews) {
        allNews == null　|| allNews.length == 0 ?
            this.setState({ isDisplayError: true}) :
            slicedNews = allNews.slice(0, 10)
            this.setState({ newsList: slicedNews })
    }
    render() {
        let cardHeight = Dimensions.get('screen').height * 0.422
        let newsList = this.state.newsList
        let count = 0
        const displayNews = newsList.map(article => (
            <NewsCard
                key={count++}
                onPress={this.props.onPress}
                article={article} />
        ))
        return (
            <View>
            <TitleLabel>NEWS</TitleLabel>
            <CardList
                cardHeight={cardHeight}
                contents={newsList}
                isFailed={this.state.isDisplayError}>
                { displayNews }
            </CardList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    matches: {
        height: Dimensions.get('window').height * 0.23,
        marginTop: Dimensions.get('window').height * 0.015
    },
    news: {
        height: Dimensions.get('window').height * 0.62
    },
});
