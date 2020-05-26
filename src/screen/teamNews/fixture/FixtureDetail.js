import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import { observer } from 'mobx-react-lite'
import FixturesContext from '../store/FixturesStore'
import ExpandHorizontal from '../../../components/animation/expand/ExpandHorizontal'
import Fade from '../../../components/animation/Fade'
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'

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
            <View style={[{ flexDirection: 'row', paddingTop: DimWidth * 0.03, paddingLeft: DimWidth * 0.03}]}>
                <Text style={styles.day}>{matchDay}</Text>
                <Text style={styles.competition}>{competition}</Text>
            </View>
            <Text style={styles.stadium}>{stadium}</Text>
            <Div div={10} />
            <View style={styles.gameResult}>
                <TeamInfo home={true} /> 
                <TeamInfo home={false} />
            </View>
            {/* <Div div={8} />
            <View style={[{ alignItems: 'center' }]}>
                <ExpandHorizontal style={[{}]} startWhen={true} delay={800}
                    sets={{ from: DimWidth * 0.5, to: DimWidth * 0.9 }} >
                    <Button style={styles.jumpToSite} fontSize={17} onPress={opneUrl}>
                        JUMP TO SOURCE SITE
                    </Button>
                </ExpandHorizontal>
            </View> */}
        </Fade>
    )
})

// let matchDay = props.fixture.event_date.substring(0, 10)
//     let matchTag = matchTags.find(tag =>
//         props.fixture.league.name.includes(tag.leagueName)).tagName
//     let homeTeamName = props.fixture.homeTeam.team_name
//     let homeTeamLogo = { uri: props.fixture.homeTeam.logo }
//     let homeTeamGoals = props.fixture.goalsHomeTeam
//     let awayTeamName = props.fixture.awayTeam.team_name
//     let awayTeamLogo = { uri: props.fixture.awayTeam.logo }
//     let awayTeamGoals = props.fixture.goalsAwayTeam
//     let { fixtureCardStatus } = React.useContext(FixturesContext)
//     let summaryFade = fixtureCardStatus[props.id].summaryFade
//     const TeamInfo = props => (
//         <View style={[{ flexheight: 30, alignItems: 'center', flexDirection: 'row' }]}>
//             <Image source={props.image} style={styles.teamLogo} />
//             <Text style={[styles.teamName, { marginLeft: 5 }]}>{props.name}</Text>
//             <Text style={styles.teamGoal}>{props.goal}</Text>
//         </View>
//     )
//     return (
//         <Fade sets={{ from: 0, to: summaryFade.value }} delay={summaryFade.delay}>
//             <TeamInfo image={homeTeamLogo} name={homeTeamName} goal={homeTeamGoals} />
//             <View style={[{ marginTop: 5 }]} />
//             <TeamInfo image={awayTeamLogo} name={awayTeamName} goal={awayTeamGoals} />
//             <View style={[{ marginTop: 5, alignItems: 'center' }]}>
//                 <View style={[{ flexDirection: 'row' }]}>
//                     <Text style={[styles.matchTag]}>{matchTag}</Text>
//                     <View style={[{ marginLeft: 10 }]} />
//                     <Text style={styles.day}>{matchDay}</Text>
//                 </View>
//             </View>
//         </Fade>
//     )

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
        flexDirection: 'row', 
        // backgroundColor: '#330000',
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
        width: DimWidth * 0.35, 
        fontSize: 18,
        color: '#A9A9A9',
        textAlign: 'center'
    },
    competition: {
        width: DimWidth * 0.55, 
        fontSize: 18,
        color: '#A9A9A9',
        textAlign: 'right'
    },
    stadium: {
        width: DimWidth * 0.93,
        fontSize: 18,
        color: '#A9A9A9',
        textAlign: 'right'
    },
});