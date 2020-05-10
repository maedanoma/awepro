import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
/**
 * {
api: {
results: 38
fixtures: [
{
fixture_id: 157019
league_id: 524
league: {
name: "Premier League"
country: "England"
logo: "https://media.api-sports.io/football/leagues/39.png"
flag: "https://media.api-sports.io/flags/gb.svg"
}
event_date: "2019-08-10T14:00:00+00:00"
event_timestamp: 1565445600
firstHalfStart: 1565445600
secondHalfStart: 1565449200
round: "Regular Season - 1"
status: "Match Finished"
statusShort: "FT"
elapsed: 90
venue: "Selhurst Park"
referee: "J. Moss"
homeTeam: {
team_id: 52
team_name: "Crystal Palace"
logo: "https://media.api-sports.io/football/teams/52.png"
}
awayTeam: {
team_id: 45
team_name: "Everton"
logo: "https://media.api-sports.io/football/teams/45.png"
}
goalsHomeTeam: 0
goalsAwayTeam: 0
score: {
halftime: "0-0"
fulltime: "0-0"
extratime: null
penalty: null
}
},
{...}
]
 */
const matchTags = [
    {leagueName: "Premier League", tagName: 'PL'},
    {leagueName: "", tagName: ''}
]

/**
 * 試合結果を表示するカード
 */
export class MatchesCard extends Component {
    /**
     * (Required)
     * @param props.onPressMatch                試合カード押下時の動作
     * @param props.fixture.event_date          試合日(e.g. "2019-08-10T14:00:00+00:00")
     * @param props.fixture.league.name         試合の大会(e.g. "Premier League")
     * @param props.fixture.homeTeam.team_name  ホームチーム名(e.g. "Crystal Palace")
     * @param props.fixture.homeTeam.logo       ホームチームのロゴ(e.g. "https://media.api-sports.io/football/teams/52.png")
     * @param props.fixture.goalsHomeTeam       ホームチームのゴール数(e.g. 0)
     * @param props.fixture.awayTeam.team_name  アウェイチーム名(e.g. "Everton")
     * @param props.fixture.awayTeam.logo       アウェイチームのロゴ(e.g. "https://media.api-sports.io/football/teams/45.png")
     * @param props.fixture.goalsAwayTeam       アウェイチームのゴール数(e.g. 0)
     * @param state.wholeOpacity                カード全体のopacity
     */
    constructor(props) {
        super(props)
        this.state = {
            wholeOpacity: new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.timing(this.state.wholeOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }
    componentWillUnmount() {
        Animated.timing(this.state.wholeOpacity).stop()
    }
    render() {
        let matchDay = this.props.fixture.event_date.substring(0, 10)
        let matchTag = matchTags.find(tag => 
            this.props.fixture.league.name.includes(tag.leagueName)).tagName
        let homeTeamName = this.props.fixture.homeTeam.team_name
        let homeTeamLogo = {uri: this.props.fixture.homeTeam.logo}
        let homeTeamGoals = this.props.fixture.goalsHomeTeam
        let awayTeamName = this.props.fixture.awayTeam.team_name
        let awayTeamLogo = {uri: this.props.fixture.awayTeam.logo}
        let awayTeamGoals = this.props.fixture.goalsAwayTeam
        let opacity = this.state.wholeOpacity
        const TeamInfo = (props) => (
            <View>
                <View style={[{ flexheight: 30, width: 240, alignItems: 'center', flexDirection: 'row' }]}>
                    <Image source={props.image} style={styles.teamLogo} />
                    <Text style={[styles.teamName, { marginLeft: 5 }]}>{props.name}</Text>
                    <Text style={styles.teamGoal}>{props.goal}</Text>
                </View>
            </View>
        )
        return (
            <Animated.View style={[{ opacity }]}>
                <TouchableOpacity style={styles.matchCard} onPress={this.props.onPressMatch}>
                    <TeamInfo image={homeTeamLogo} name={homeTeamName} goal={homeTeamGoals} />
                    <View style={[{ marginTop: 5 }]} />
                    <TeamInfo image={awayTeamLogo} name={awayTeamName} goal={awayTeamGoals} />
                    <View style={[{ marginTop: 5, alignItems: 'center' }]}>
                        <View style={[{flexDirection: 'row'}]}>
                            <Text style={[styles.matchTag]}>{matchTag}</Text>
                            <View style={[{ marginLeft: 10 }]} />
                            <Text style={styles.day}>{matchDay}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

/**
 * ニュース概要を表示するカード
 */
export class NewsCard extends Component {
    /**
     * (Required)
     * @param props.onPressSeeMore  see moreボタン押下時の動作
     * @param props.newsDay         ニュースの日付
     * @param props.newsImage       ニュースの画像
     * @param props.title           ニュースのタイトル
     */
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style={[styles.newsCard]} onPress={this.props.onPressSeeMore}>
                <Image style={styles.newsImage} source={this.props.newsImage} />
                <Text style={[styles.newsDay, {margin: 4}]}>
                    {this.props.newsDay}
                </Text>
                <Text style={[styles.newsTitleText]} numberOfLines={2}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    matchCard: {
        width: 220,
        height: 115,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
    },
    teamLogo: {
        width: 30,
        height: 30,
        borderRadius: 45,
    },
    teamName: {
        width: 140,
        fontSize: 15,
    },
    teamGoal: {
        width: 20,
        fontSize: 25,
    },
    matchTag: {
        height: 22,
        width: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4B0082',
        fontSize: 15,
        textAlign: 'center',
        color: '#4B0082',
    },
    day: {
        fontSize: 18,
        color: '#A9A9A9',
    },
    newsCard: {
        height: Dimensions.get('screen').height * 0.4,
        width: Dimensions.get('screen').width * 0.96,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        margin: Dimensions.get('screen').width * 0.02,
        alignItems: 'center'
    },
    newsImage: {
        height: Dimensions.get('screen').height * 0.28,
        width: Dimensions.get('screen').width * 0.96,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    newsTitleText: {
        width: Dimensions.get('screen').width * 0.9,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    day: {
        fontSize: 18,
        color: '#A9A9A9',
    },
    newsDay: {
        width: Dimensions.get('screen').width * 0.9,
        color: '#A9A9A9',
        fontSize: 16,
    },
});