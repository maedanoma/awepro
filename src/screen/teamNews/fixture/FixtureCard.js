import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import Card from '../../../components/card/Card'
import FadeIn from '../../../components/animation/FadeIn'
import SlideVertical from '../../../components/animation/slide/SlideVertical';
import ExpandVertical from '../../../components/animation/expand/ExpandVertical';
import { DimHeight, DimWidth } from '../../../components/Layout';
import ExpandHorizontal from '../../../components/animation/expand/ExpandHorizontal';
import FixturesContext from '../store/FixturesStore'

const matchTags = [
    { leagueName: "Premier League", tagName: 'PL' },
    { leagueName: "", tagName: '' }
]

/**
 * 試合結果を表示するカード
 */
const FixtureCard = observer(props => {
    let matchDay = props.fixture.event_date.substring(0, 10)
    let matchTag = matchTags.find(tag =>
        props.fixture.league.name.includes(tag.leagueName)).tagName
    let homeTeamName = props.fixture.homeTeam.team_name
    let homeTeamLogo = { uri: props.fixture.homeTeam.logo }
    let homeTeamGoals = props.fixture.goalsHomeTeam
    let awayTeamName = props.fixture.awayTeam.team_name
    let awayTeamLogo = { uri: props.fixture.awayTeam.logo }
    let awayTeamGoals = props.fixture.goalsAwayTeam
    let { fixtureCardStatus, popUpFixture } = React.useContext(FixturesContext)
    let height = fixtureCardStatus[props.id].height
    let width = fixtureCardStatus[props.id].width
    const TeamInfo = props => (
        <View style={[{ flexheight: 30, alignItems: 'center', flexDirection: 'row' }]}>
            <Image source={props.image} style={styles.teamLogo} />
            <Text style={[styles.teamName, { marginLeft: 5 }]}>{props.name}</Text>
            <Text style={styles.teamGoal}>{props.goal}</Text>
        </View>
    )
    const onPress = () => {
        popUpFixture(props.id)
    }
    return (
        <FadeIn>
            <ExpandHorizontal style={[{ margin: 10 }]}
                sets={{ from: DimWidth * 0.54, to: width.value }} delay={width.delay}>
                <ExpandVertical style={[{}]}
                    sets={{ from: DimHeight * 0.155, to: height.value }} delay={height.delay}>
                    <Card style={[styles.matchCard]} onPress={onPress} >
                        <TeamInfo image={homeTeamLogo} name={homeTeamName} goal={homeTeamGoals} />
                        <View style={[{ marginTop: 5 }]} />
                        <TeamInfo image={awayTeamLogo} name={awayTeamName} goal={awayTeamGoals} />
                        <View style={[{ marginTop: 5, alignItems: 'center' }]}>
                            <View style={[{ flexDirection: 'row' }]}>
                                <Text style={[styles.matchTag]}>{matchTag}</Text>
                                <View style={[{ marginLeft: 10 }]} />
                                <Text style={styles.day}>{matchDay}</Text>
                            </View>
                        </View>
                    </Card>
                </ExpandVertical>
            </ExpandHorizontal>
        </FadeIn>
    )
})


FixtureCard.propTypes = {
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

export default FixtureCard

const styles = StyleSheet.create({
    matchCard: {
        // width: DimWidth * 0.54,
        // height: DimHeight * 0.155,
        width: '100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#3F3F3F',
        padding: 7,
        // margin: 10,
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