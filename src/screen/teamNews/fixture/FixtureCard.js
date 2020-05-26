import React from 'react';
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import Card from '../../../components/card/Card'
import Fade from '../../../components/animation/Fade'
import ExpandVertical from '../../../components/animation/expand/ExpandVertical';
import { DimHeight, DimWidth } from '../../../components/Layout';
import ExpandHorizontal from '../../../components/animation/expand/ExpandHorizontal';
import FixturesContext from '../store/FixturesStore'
import FixtureDetail from './FixtureDetail'
import FixtureSummary from './FixtureSummary';
/**
 * 試合結果を表示するカード
 */
const FixtureCard = observer(props => {
    let { fixtureCardStatus, popUpFixture } = React.useContext(FixturesContext)
    let height = fixtureCardStatus[props.id].height
    let width = fixtureCardStatus[props.id].width
    const onPress = () => {
        popUpFixture(props.id)
    }
    return (
        <Fade>
            <ExpandHorizontal style={[{ margin: DimHeight * 0.014 }]}
                sets={{ from: DimWidth * 0.54, to: width.value }} delay={width.delay}>
                <ExpandVertical style={[{}]}
                    sets={{ from: DimHeight * 0.155, to: height.value }} delay={height.delay}>
                    <Card style={[styles.matchCard]} onPress={onPress} >
                        <FixtureSummary fixture={props.fixture} id={props.id} />
                        <FixtureDetail fixture={props.fixture} id={props.id} />
                    </Card>
                </ExpandVertical>
            </ExpandHorizontal>
        </Fade>
    )
})


FixtureCard.propTypes = {
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
        width: '100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#3F3F3F',
        paddingTop: 7,
        justifyContent: 'center'
    },
});