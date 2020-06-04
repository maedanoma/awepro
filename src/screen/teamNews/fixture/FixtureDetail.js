import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import { observer } from 'mobx-react-lite'
import FixturesContext from '../store/FixturesStore'
import Fade from '../../../components/animation/Fade'
import PropTypes from 'prop-types'
import { DimWidth, Div, DimHeight } from '../../../components/Layout'
import FixtureContent from './FixtureContent'

const stadiumIcon = require('../../../res/stadium.jpg')
const timeIcon = require('../../../res/time.jpg')
const compeIcon = require('../../../res/compe.jpg')

/**
 * 試合詳細を表示するカード
 */
const FixtureDetail = observer(props => {
    let matchDay = props.fixture.event_date.substring(0, 10) + ' ' +
            props.fixture.event_date.substring(11, 16)
    let competition = props.fixture.league.name 
    let stadium = props.fixture.venue
    let homeTeamName = props.fixture.homeTeam.team_name
    let homeFontSize = props.fixture.homeTeam.team_name.length < 9? 20: 15 
    let homeTeamLogo = { uri: props.fixture.homeTeam.logo }
    let homeTeamGoals = props.fixture.goalsHomeTeam
    let awayTeamName = props.fixture.awayTeam.team_name
    let awayFontSize = props.fixture.awayTeam.team_name.length < 9? 20: 15
    let awayTeamLogo = { uri: props.fixture.awayTeam.logo }
    let awayTeamGoals = props.fixture.goalsAwayTeam
    let { fixtureCardStatus } = React.useContext(FixturesContext)
    let detailFade = fixtureCardStatus[props.id].detailFade
    const TeamInfo = props => (
        props.home?
            <View style={[{ alignItems: 'center', flexDirection: 'row' }]}>
                <Image source={homeTeamLogo} style={styles.teamLogo} />
                <Text style={[styles.teamName, { fontSize: homeFontSize }]}>{homeTeamName}</Text>
                <Text style={[styles.teamGoal, styles.homeGoal]}>{homeTeamGoals}</Text>
            </View>:
            <View style={[{ alignItems: 'center', flexDirection: 'row' }]}>
                <Text style={[styles.teamGoal, styles.awayGoal]}>{awayTeamGoals}</Text>
                <Text style={[styles.teamName, { fontSize: awayFontSize }]}>{awayTeamName}</Text>
                <Image source={awayTeamLogo} style={styles.teamLogo} />
            </View>
    )
    return (
        <Fade style={styles.container} startWhen={false} 
            sets={{from: 0, to: detailFade.value }} delay={detailFade.delay} duration={detailFade.duration}>
            <View style={[{ flexDirection: 'row', paddingTop: DimWidth * 0.03, marginLeft: DimWidth * 0.03 }]}>
                <Image style={[styles.timeIcon]} source={compeIcon} />
                <Text style={[styles.competition, {marginLeft: DimWidth * 0.01}]}>{competition}</Text>
            </View>
            <Div div={DimHeight * 0.01} />
            <View style={[{ flexDirection: 'row', justifyContent: 'center' }]}>
                <Image style={styles.timeIcon} source={timeIcon} />
                <Text style={[styles.day, {marginLeft: DimWidth * 0.01}]}>{matchDay}</Text>
            </View>
            <View style={styles.gameResult}>
                <TeamInfo home={true} /> 
                <TeamInfo home={false} />
            </View>
            <View style={[{ flexDirection: 'row', justifyContent: 'center' }]}>
                <Image style={styles.stadiumIcon} source={stadiumIcon} />
                <Text style={[styles.stadium, {marginLeft: DimWidth * 0.01}]}>{stadium}</Text>
            </View>
            <Div div={DimHeight * 0.01} />
            <FixtureContent style={styles.contents} fixture={props.fixture} />
        </Fade>
    )
})

FixtureDetail.propTypes = {
    // ニュース情報
    fixture: PropTypes.object.isRequired,
    //     description: PropTypes.string.isRequired, // ニュースの詳細
    //     url: PropTypes.string.isRequired, // ニュースのソース
    id: PropTypes.number.isRequired
}

export default FixtureDetail

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: -10,
    },
    gameResult: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
    }, 
    teamLogo: {
        width: DimWidth * 0.12,
        height: DimWidth * 0.12,
        margin: DimWidth * 0.01,
    },
    teamName: {
        width: DimWidth * 0.245,
        color: '#CCCCCC',
        textAlign: 'center',
        borderRadius: 15,
        padding: 1
    },
    teamGoal: {
        width: DimWidth * 0.075,
        height: DimWidth * 0.09,
        lineHeight: DimWidth * 0.09,
        fontSize: 32,
        color: '#CCCCCC',
        textAlign: 'center',
    },
    homeGoal: {
        marginLeft: DimWidth * 0.015,
        borderRightWidth: 0.5, 
        borderRightColor: '#555555'
    },
    awayGoal: {
        marginRight: DimWidth * 0.015,
        borderLeftWidth: 0.5, 
        borderLeftColor: '#555555'
    },
    day: {
        fontSize: 18,
        color: '#A9A9A9',
        textAlign: 'center'
    },
    competition: {
        fontSize: 18,
        color: '#A9A9A9',
    },
    stadium: {
        fontSize: 18,
        color: '#A9A9A9',
    },
    stadiumIcon: {
        height: DimWidth * 0.06,
        width: DimWidth * 0.06,
        borderRadius: DimWidth * 0.02,
        backgroundColor: '#CCCCCC'
    },
    timeIcon: {
        height: DimWidth * 0.06,
        width: DimWidth * 0.06,
        borderRadius: DimWidth * 0.03,
        backgroundColor: '#CCCCCC'
    },
    contents: {
        width: DimWidth,
        height: DimHeight * 0.65,
    }
})