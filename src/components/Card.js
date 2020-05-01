import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import { MiniLandscapeButton } from '../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler';

const everton = { uri: 'https://media.gettyimages.com/photos/the-everton-logo-is-seen-outside-the-stadium-prior-to-the-premier-picture-id870497804?s=2048x2048' }
const liverpool = { uri: 'https://media.gettyimages.com/photos/wall-with-liverpool-fc-logo-during-the-uefa-champions-league-round-of-picture-id1125794244?s=2048x2048' }

export class MatchesCard extends Component {
    render() {
        const {
            onPressMatch,
            matchDay,
            matchTag,
            homeTeamName,
            homeTeamGoals,
            awayTeamName,
            awayTeamGoals,
        } = this.props;

        const TeamInfo = (props) => (
            <View>
                <View style={[styles.horizontal, { height: 30, width: 240, alignItems: 'center' }]}>
                    <Image source={props.image} style={styles.teamLogo} />
                    <Text style={[styles.teamName, { marginLeft: 5 }]}>{props.name}</Text>
                    <Text style={styles.teamGoal}>{props.goal}</Text>
                </View>
            </View>
        )

        return (
            <TouchableOpacity style={styles.matchCard} onPress={onPressMatch}>
                <TeamInfo image={everton} name={homeTeamName} goal={homeTeamGoals} />
                <View style={[{ marginTop: 5 }]} />
                <TeamInfo image={liverpool} name={awayTeamName} goal={awayTeamGoals} />
                <View style={[{ marginTop: 5, alignItems: 'center' }]}>
                    <View style={styles.horizontal}>
                        <Text style={[styles.matchTag]}>{matchTag}PL</Text>
                        <View style={[{ marginLeft: 10 }]} />
                        <Text style={styles.day}>{matchDay}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export class NewsCard extends Component {
    render() {
        const {
            onPressDetails,
            newsImage,
            title,
            newsDay,
        } = this.props;

        const DetailsButton = () => (
            <MiniLandscapeButton
                onPressButton={onPressDetails}
                text='DETAIL'
                backgroundColor='#FFFFFF'
                borderColor='#004095'
                color='#004095' />
        );

        return (
            <View style={[styles.newsCard]}>
                <View style={styles.center}>
                    <Image
                        style={styles.newsImage}
                        source={newsImage} />
                </View>
                <Text
                    style={[styles.newsTitleText, { margin: 5 }]}
                    numberOfLines={2}>
                    {title}アンドレ・ゴメスが esports の大会でスターリングに敗退！ああああああああああああああああああああああああああ
                </Text>
                <View style={[styles.horizontal, styles.detailAndDay, { margin: 10 }]}>
                    <View style={[styles.details, { marginLeft: 15 }]}>
                        <DetailsButton />
                    </View>
                    <Text style={[styles.day, { marginLeft: 130 }]}>
                        {newsDay}2019/20/20
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // Mathces
    matchCard: {
        width: 220,
        height: 115,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
    },
    teamLogo: {
        width: 30,
        height: 30,
        borderRadius: 45,
    },
    teamName: {
        width: 140,
        fontSize: 15,
    },
    teamGoal: {
        width: 20,
        fontSize: 25,
    },
    matchTag: {
        height: 22,
        width: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4B0082',
        fontSize: 15,
        textAlign: 'center',
        color: '#4B0082',
    },
    day: {
        fontSize: 18,
        color: '#A9A9A9',
    },
    newsCard: {
        height: 340,
        width: Dimensions.get('screen').width * 0.96,
        borderRadius: 35,
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
    },
    newsImage: {
        height: 200,
        width: Dimensions.get('screen').width * 0.91,
        borderRadius: 20,
        margin: 10,
    },
    newsTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    day: {
        fontSize: 18,
        color: '#A9A9A9',
    },
    detailAndDay: {
        width: Dimensions.get('screen').width * 0.91,
    },
    horizontal: {
        flexDirection: 'row'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});