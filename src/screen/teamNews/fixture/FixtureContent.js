import React from 'react'
import {
    StyleSheet,
    View,
    Easing,
} from 'react-native'
import { observer } from 'mobx-react-lite'
import FixtureContentContext from '../store/FixturesContentStore'
import PropTypes from 'prop-types'
import { DimWidth, Div, DimHeight } from '../../../components/Layout'
import FixtureEvents from './FixtureEvents'
import FixtureLineUp from './FixtureLineUp'
import SlideHorizontal from '../../../components/animation/slide/SlideHorizontal'
import Button from '../../../components/button/Button'

const defaultLineup = {
        "everton": {
            "coach_id": 34,
            "coach": "O. Dall’Oglio",
            "formation": "4-2-3-1",
            "startXI": [
                {
                    "team_id": 106,
                    "player_id": 20541,
                    "player": "G. Larsonneur",
                    "number": 1,
                    "pos": "G"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "J. Vestergaard",
                    "number": 17,
                    "pos": "D"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "J. Vestergaard",
                    "number": 17,
                    "pos": "D"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "J. Vestergaard",
                    "number": 17,
                    "pos": "D"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "J. Vestergaard",
                    "number": 17,
                    "pos": "D"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "A. Ayew",
                    "number": 23,
                    "pos": "M"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "A. Ayew",
                    "number": 23,
                    "pos": "M"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "A. Ayew",
                    "number": 23,
                    "pos": "M"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "A. Ayew",
                    "number": 23,
                    "pos": "M"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "A. Ayew",
                    "number": 23,
                    "pos": "M"
                },
                {
                    "team_id": 106,
                    "player_id": 20684,
                    "player": "J. Ayew",
                    "number": 12,
                    "pos": "F"
                },
            ],
            "substitutes": [
                {
                    "team_id": 106,
                    "player_id": 22266,
                    "player": "S. Grandsir",
                    "number": 25,
                    "pos": "M"
                },
                {
                    "team_id": 106,
                    "player_id": 21506,
                    "player": "A. Mendy",
                    "number": 15,
                    "pos": "F"
                },
            ]
        },
}

/**
 * 試合詳細を表示するカード
 */
const FixtureContent = observer(props => {
    let { content, event, lineup } = React.useContext(FixtureContentContext)
    return (
        <View style={[{ ...props.style }]}>
            <View style={[{ flexDirection: 'row', justifyContent: 'center' }]}>
                <View style={[{
                    opacity: content.event.opacity, borderBottomWidth: 2,
                    borderBottomColor: content.event.underLineColor
                }]}>
                    <Button onPress={event} fontSize={21}>EVENT</Button>
                </View>
                <Div div={DimWidth * 0.1} horizontal={true} />
                <View style={[{
                    opacity: content.stats.opacity, borderBottomWidth: 2,
                    borderBottomColor: content.stats.underLineColor
                }]}>
                    <Button onPress={lineup} fontSize={21}>LINEUP</Button>
                </View>
            </View>
            <Div div={DimHeight * 0.01} />
            <View style={[{ width: DimWidth * 2, flexDirection: 'row', justifyContent: 'center' }]}>
                <SlideHorizontal style={[{}]} x={content.left} easing={Easing.quad}>
                    <FixtureEvents homeTeamId={props.fixture.homeTeam.team_id} />
                </SlideHorizontal>
                <SlideHorizontal style={[{}]} x={content.left} easing={Easing.quad}>
                    <FixtureLineUp lineup={defaultLineup} />
                </SlideHorizontal>
            </View>
        </View>
    )
})

FixtureContent.propTypes = {
    // ニュース情報
    fixture: PropTypes.object.isRequired,
    //     description: PropTypes.string.isRequired, // ニュースの詳細
    //     url: PropTypes.string.isRequired, // ニュースのソース
    id: PropTypes.number.isRequired
}

export default FixtureContent