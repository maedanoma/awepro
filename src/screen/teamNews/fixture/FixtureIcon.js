import React from 'react'
import {
    StyleSheet,
    View,
    Image
} from 'react-native'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'

const goal = require('../../../res/goal.jpg')
const subst = require('../../../res/subst.jpg')

const Goal = () => (
    <Image style={styles.goal} source={goal} />
)
const YellowCard = () => (
    <View style={[styles.yellowCard]} />
)
const Subst = () => (
    <Image style={styles.subst} source={subst} />
)
const Empty = () => (
    <View style={styles.container} />
)

const icons = [
    { id: 0, type: 'Goal', component: <Goal/> },
    { id: 1, type: 'Card', component: <YellowCard/> },
    { id: 2, type: 'subst', component: <Subst/> },
]

export const getIcon = type => {
    let target = icons.find(icon => {
        return icon.type == type
    })
    return target.component
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    yellowCard: {
        width: DimWidth * 0.04,
        height: DimWidth * 0.055,
        backgroundColor: '#FFFF00'
    },
    goal: {
        width: DimWidth * 0.065,
        height: DimWidth * 0.065,
    },
    subst: {
        width: DimWidth * 0.05,
        height: DimWidth * 0.06,
    },
})