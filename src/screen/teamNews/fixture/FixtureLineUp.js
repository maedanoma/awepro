import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native'
import { observer } from 'mobx-react-lite'
import FixtureContentContext from '../store/FixturesContentStore'
import PropTypes from 'prop-types'
import { DimWidth, Div, DimHeight } from '../../../components/Layout'
import FixtureEvents from './FixtureEvents'
import Button from '../../../components/button/Button'

const image = '../../../res/field.jpg'

/**
 * ラインナップを表示するカード
 * "lineUps": {
            "Stade Brestois 29": {
                "coach_id": 34,
                "coach": "O. Dall’Oglio",
                "formation": "4-2-3-1",
 */
const FixtureLineUp = observer(props => {
    let formation = props.lineup.everton.formation.split('-')
    let fpHeight = DimHeight * 0.478 / formation.length
    let startXI = props.lineup.everton.startXI
    const LayerPlayer = props => (
        <View style={[styles.layerArea, { height: fpHeight }]}>
        {
            props.posArea.map(player => (
                <View style={[styles.playerArea, {width: DimWidth / props.posArea.length }]}>
                    <Text style={styles.playerNumber}>{player.number}</Text>
                    <Text style={styles.playerName}>{player.player}</Text>
                </View>
            ))
        }
        </View>
    )
    const Members = props => {
        let gk = startXI[0]
        let dfLength = Number(formation[0]) + 1
        let df = startXI.slice(1, dfLength)
        let dmLength = Number(formation[1]) + dfLength
        let dm = startXI.slice(dfLength, dmLength)
        let omLength = Number(formation[2]) + dmLength
        let om = formation.length == 3? {}: startXI.slice(dmLength, omLength)
        let fwLength = formation.length == 3? omLength: Number(formation[3]) + omLength 
        let fw = formation.length == 3? startXI.slice(dmLength, fwLength):
            startXI.slice(omLength, fwLength)
        return (
            props.home?
            <View>
                <View style={[styles.playerArea, { height: DimHeight * 0.11 }]}>
                    <Text style={styles.playerNumber}>{gk.number}</Text>
                    <Text style={styles.playerName}>{gk.player}</Text>
                </View>
                <LayerPlayer posArea={df} />
                <LayerPlayer posArea={dm} />
                {
                    formation.length == 3? <View/>:
                        <LayerPlayer posArea={om} />
                }
                <LayerPlayer posArea={fw} />
            </View>:
            <View>
                <LayerPlayer style={[]} posArea={fw} />
                {
                    formation.length == 3? <View/>:
                        <LayerPlayer posArea={om} />
                }
                <LayerPlayer posArea={dm} />
                <LayerPlayer posArea={df} />
                <View style={[styles.playerArea, { height: DimHeight * 0.11 }]}>
                    <Text style={styles.playerNumber}>{gk.number}</Text>
                    <Text style={styles.playerName}>{gk.player}</Text>
                </View>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container} overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={1}>
                <ImageBackground style={styles.background} source={require(image)}>
                    <Members home={true} />
                    <Members home={false} />
                </ImageBackground>
                <Div div={DimHeight * 0.08}/>
            </TouchableOpacity>    
        </ScrollView>
    )
})

FixtureLineUp.propTypes = {
    // ニュース情報
    fixture: PropTypes.object.isRequired,
    //     description: PropTypes.string.isRequired, // ニュースの詳細
    //     url: PropTypes.string.isRequired, // ニュースのソース
    id: PropTypes.number.isRequired
}

export default FixtureLineUp

const styles = StyleSheet.create({
    container: {
        width: DimWidth,
        height: DimHeight * 0.65,
    },
    background: {
        width: DimWidth * 0.96,
        height: DimHeight * 1.175,
        marginHorizontal: DimWidth * 0.02
    },
    playerNumber: {
        height: DimWidth * 0.08,
        lineHeight: DimWidth * 0.08,
        width: DimWidth * 0.08,
        borderRadius: DimWidth * 0.1 / 2,
        fontSize: DimHeight * 0.025, // 18
        color: '#A9A9A9',
        backgroundColor: '#555555',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#7F7F7F'
    },
    playerName: {
        height: DimWidth * 0.09,
        lineHeight: DimWidth * 0.045,
        fontSize: DimHeight * 0.022, // 15
        color: '#FFFFFF',
        textAlign: 'center',
    },
    playerArea: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    layerArea: {
        width: DimWidth * 0.97,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})