import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
} from 'react-native';
import Card from '../../components/card/Card';
import PropTypes from 'prop-types'
import {
    initializeAnimation,
    startTimingAnimation,
    stopAnimation,
} from '../../components/animation/Animation'

const matchTags = [
    {leagueName: "Premier League", tagName: 'PL'},
    {leagueName: "", tagName: ''}
]

/**
 * 試合結果を表示するカード
 */
export default class FixtureCard extends Component {
    /**
     * @param state.wholeOpacity カード全体のopacity
     */
    constructor(props) {
        super(props)
        this.state = {
            wholeOpacity: initializeAnimation(0)
        }
    }
    static propTypes = {
        // FixtureCard押下時の動作
        onPress: PropTypes.func.isRequired,
        // ニュース情報
        fixture: PropTypes.object,
        // fixture: {
        //     event_date: PropTypes.string, // 試合日(e.g. "2019-08-10T14:00:00+00:00")
        //     league: {
        //         name: PropTypes.string, // 試合の大会(e.g. "Premier League")
        //     },
        //     homeTeam: {
        //         team_name: PropTypes.string, // ホームチーム名(e.g. "Crystal Palace")
        //         logo: PropTypes.string, // ホームチームのロゴ(e.g. "https://media.api-sports.io/football/teams/52.png")
        //     },
        //     goalsHomeTeam: PropTypes.number, // ホームチームのゴール数(e.g. 0)
        //     awayTeam: {
        //         team_name: PropTypes.string, // アウェイチーム名(e.g. "Everton")
        //         logo: PropTypes.string, // アウェイチームのロゴ(e.g. "https://media.api-sports.io/football/teams/45.png")
        //     },
        //     goalsAwayTeam: PropTypes.number // アウェイチームのゴール数(e.g. 0)
        // }
    }

    componentDidMount() {
        startTimingAnimation([{
            value: this.state.wholeOpacity,
            toValue: 1,
            duration: 1000,
        }])
    }
    componentWillUnmount() {
        stopAnimation([this.state.wholeOpacity])
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
                <View style={[{ flexheight: 30, alignItems: 'center', flexDirection: 'row' }]}>
                    <Image source={props.image} style={styles.teamLogo} />
                    <Text style={[styles.teamName, { marginLeft: 5 }]}>{props.name}</Text>
                    <Text style={styles.teamGoal}>{props.goal}</Text>
                </View>
        )
        return (
                <Card style={[styles.matchCard, {opacity}]} onPress={() => {}} >
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
                </Card>
        );
    }
}

const styles = StyleSheet.create({
    matchCard: {
        width: 220,
        height: 115,
        borderRadius: 20,
        backgroundColor: '#3F3F3F',
        padding: 7,
        margin: 10,
        justifyContent: 'center'
    },
    teamLogo: {
        width: 30,
        height: 30,
        borderRadius: 45,
    },
    teamName: {
        width: 140,
        fontSize: 15,
        color: '#CCCCCC'
    },
    teamGoal: {
        width: 20,
        fontSize: 25,
        color: '#CCCCCC'
    },
    matchTag: {
        height: 22,
        width: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#9057FF',
        fontSize: 15,
        textAlign: 'center',
        color: '#9057FF',
    },
    day: {
        fontSize: 18,
        color: '#A9A9A9',
    },
});