import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { MiniLandscapeButton } from '../components/Button'

export class MatchesCard extends Component {
    render() {
        const {
            onPressDetails,
            matchDay,
            homeTeamName,
            homeTeamLogo,
            homeTeamGoals,
            awayTeamName,
            awayTeamLogo,
            awayTeamGoals,
        } = this.props;

        const DetailsButton = () => (
            <MiniLandscapeButton
                onPressButton={onPressDetails}
                text='DETAIL'
                backgroundColor='#FFFFFF'
                borderColor='#004095'
                color='#004095' />
        );

        const GoalsText = () => (
            <View style={[{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
            }]}>
                <Text style={[{ width: 20, fontSize: 40 }]}>
                    {homeTeamGoals}
                </Text>
                <Text style={[{ width: 10, fontSize: 40, margin: 5 }]}>
                    -
                </Text>
                <Text style={[{ width: 20, fontSize: 40 }]}>
                    {awayTeamGoals}
                </Text>
            </View>
        )

        return (
            <View style={styles.matchCard}>
                <View style={[styles.horizontal, { width: 100, marginTop: 10 }]}>
                    <Team style={styles.team} logo={homeTeamLogo} name={homeTeamName} />
                    <GoalsText />
                    <Team style={styles.team} logo={awayTeamLogo} name={awayTeamName} />
                </View>
                <View style={[styles.horizontal, { margin: 10 }]}>
                    <View style={[styles.details, {marginLeft: 15}]}>
                        <DetailsButton />
                    </View>
                    <Text style={[styles.matchDay, {width: 140, textAlign: 'right'}]}>
                        {matchDay}
                </Text>
                </View>
            </View>
        );
    }
}

class Team extends Component {
    render() {
        const {
            logo,
            name,
        } = this.props;
        return (
            <View style={[{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }]}>
                <Image
                    source={logo}
                    style={[{ width: 50, height: 50, }]} />
                <Text style={[styles.details, { fontSize: 15, }]}>
                    {name}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    matchCard: {
        width: 305,
        height: 165,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DCDCDC',
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
    },
    matchDay: {
        fontSize: 18,
        color: '#a9a9a9',
    },
    horizontal: {
        flexDirection: 'row'
    },
    details: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});