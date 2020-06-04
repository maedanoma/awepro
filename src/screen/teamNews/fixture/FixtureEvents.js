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
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'
import { getIcon } from './FixtureIcon'

/**
 * 試合詳細を表示するカード
 */
const FixtureEvents = observer(props => {
    let { events } = React.useContext(FixturesContext)
    let count = 0
    const Player = props => {
        let textAlign = props.home ? 'right' : 'left'
        return (
            <View>
                <Text style={[styles.eventPlayer, { textAlign }]}>
                    {props.event.player}
                </Text>
                {
                    props.event.type == 'subst' ||
                        (props.event.type == 'Goal' && props.event.assist != "" && props.event.assist != null) ?
                        <Text style={[styles.assistPlayer, { textAlign }]}>
                            {props.event.assist}
                        </Text> : <View />
                }
            </View>
        )
    }
    const Event = props => (
        props.home ?
            <View style={styles.iconPlayerArea}>
                <Player event={props.event} home={props.home} />
                <View style={styles.eventIcon}>
                    {getIcon(props.event.type)}
                </View>
            </View> :
            <View style={styles.iconPlayerArea}>
                <View style={styles.eventIcon}>
                    {getIcon(props.event.type)}
                </View>
                <Player event={props.event} home={props.home} />
            </View>
    )
    const displayEvents = events.map(event => {
        let home = event.team_id == props.homeTeamId
        return (
            <View style={styles.eventArea} key={count++}>
                {home ? <Event home={true} event={event} /> : <View style={styles.emptyArea} />}
                <View style={[{ alignItems: 'center' }]}>
                    <View style={styles.line} />
                    <Text style={styles.elapse}>{event.elapsed}</Text>
                    <View style={styles.line} />
                </View>
                {home ? <View style={styles.emptyArea} /> : <Event home={false} event={event} />}
            </View>
        )
    })
    return (
        <ScrollView style={[styles.container]}
            overScrollMode={'never'} showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={1}>
                <View style={styles.fixedEventArea}>
                    <Text style={styles.elapse}>KO</Text>
                    <View style={styles.line} />
                </View>
                {displayEvents}
                <View style={styles.fixedEventArea}>
                    <View style={styles.line} />
                    <Text style={styles.elapse}>FT</Text>
                </View>
                <Div div={DimHeight * 0.08} />
            </TouchableOpacity>
        </ScrollView>
    )
})

FixtureEvents.propTypes = {
    homeTeamId: PropTypes.number
}

export default FixtureEvents

const styles = StyleSheet.create({
    container: {
        width: DimWidth,
        height: DimHeight * 0.65,
    },
    elapse: {
        height: DimWidth * 0.08,
        lineHeight: DimWidth * 0.08,
        width: DimWidth * 0.08,
        borderRadius: DimWidth * 0.1 / 2,
        fontSize: 18,
        color: '#A9A9A9',
        backgroundColor: '#555555',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#7F7F7F'
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
        width: 2,
        backgroundColor: '#7F7F7F',
    },
    eventPlayer: {
        width: DimWidth * 0.31,
        color: '#A9A9A9',
        fontSize: 18,
    },
    assistPlayer: {
        width: DimWidth * 0.31,
        color: '#A9A9A9',
        fontSize: 14,
        opacity: 0.3
    },
    eventArea: {
        width: DimWidth * 0.96,
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: DimWidth * 0.02,
    },
    fixedEventArea: {
        width: DimWidth * 0.96,
        marginHorizontal: DimWidth * 0.02,
        alignItems: 'center',
    },
    iconPlayerArea: {
        width: DimWidth * 0.435,
        alignItems: 'center',
        flexDirection: 'row',
    },
    emptyArea: {
        width: DimWidth * 0.435
    }
})