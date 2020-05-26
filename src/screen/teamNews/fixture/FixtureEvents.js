import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { observer } from 'mobx-react-lite'
import FixturesContext from '../store/FixturesStore'
import Fade from '../../../components/animation/Fade'
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'
import { getIcon } from './FixtureIcon'

/**
 * 試合詳細を表示するカード
 */
const FixtureEvents = observer(props => {
    let { events } = React.useContext(FixturesContext)
    let count=0
    const Player = props => {
        let textAlign = props.home? 'right': 'left'
        return (
            <View>
                <Text style={[styles.eventPlayer, { textAlign }]}>
                    {props.event.player}
                </Text>
                {
                    props.event.type == 'subst' ||
                    (props.event.type == 'Goal' && props.event.assist != "" && props.event.assist != null)?
                        <Text style={[styles.assistPlayer, { textAlign }]}>
                            {props.event.assist}
                        </Text>:<View />
                }
            </View>
    )}
    const Event = props => (
        props.home?
            <View style={styles.iconPlayerArea}>
                <Player event={props.event} home={props.home} />
                <View style={styles.eventIcon}>
                    { getIcon(props.event.type) }
                </View>
            </View>:
            <View style={styles.iconPlayerArea}>
                <View style={styles.eventIcon}>
                    { getIcon(props.event.type) }
                </View>
                <Player event={props.event} home={props.home} />
            </View>

    )
    const EventInfo = () => (
        events.map(event => {
            let home = event.team_id == props.homeTeamId
            return (
                <View style={styles.eventArea} key={count++}>
                    { home? <Event home={true} event={event} />: <View style={styles.emptyArea} /> }
                    <View style={[{ alignItems: 'center' }]}>
                        <View style={styles.line}/>
                        <Text style={styles.elapse}>{event.elapsed}</Text>
                        <View style={styles.line}/>
                    </View>
                    { home? <View style={styles.emptyArea} />: <Event home={false} event={event} /> }
                </View>
            )
        }
    ))
    return (
        <ScrollView style={styles.container}>
            <EventInfo />
        </ScrollView>
    )
})

FixtureEvents.propTypes = {
    homeTeamId: PropTypes.number
}

export default FixtureEvents

const styles = StyleSheet.create({
    container: {
        width: DimWidth * 0.96,
        height: DimHeight * 0.725,
    },
    elapse: {
        height: DimWidth * 0.08,
        lineHeight: DimWidth * 0.08,
        width: DimWidth * 0.08,
        borderRadius: DimWidth * 0.1 / 2,
        fontSize: 18,
        color: '#A9A9A9',
        backgroundColor: '#555555',
        textAlign: 'center'
    },
    eventIcon: {
        height: DimWidth * 0.08,
        width: DimWidth * 0.08,
        margin: DimWidth * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: DimWidth * 0.025,
        width: 1,
        backgroundColor: '#555555',
    },
    eventPlayer: {
        width: DimWidth * 0.29,
        color: '#A9A9A9',
        fontSize: 16,
    },
    assistPlayer: {
        width: DimWidth * 0.29,
        color: '#A9A9A9',
        fontSize: 13,
        opacity: 0.3
    },
    eventArea: {
        width: DimWidth * 0.92,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: DimWidth * 0.02,
        marginRight: DimWidth * 0.02
    },
    iconPlayerArea: {
        width: DimWidth * 0.415,
        alignItems: 'center',
        flexDirection: 'row',
    },
    emptyArea: {
        width: DimWidth * 0.415
    }
})