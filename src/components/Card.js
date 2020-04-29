import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Animated,
    ImageBackground
} from 'react-native';
import { MiniLandscapeButton } from '../components/Button'

const bagro = require('../res/login_gomes.jpg');

export class HeaderCard extends Component {
    state = {
        headerImageOpacity: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(this.state.headerImageOpacity,
            {
                toValue: 0.8,
                duration: 2000,
            }
        ).start();
    }

    componentWillUnmount() {
        this.state.headerImageOpacity.stopAnimation();
    }

    render() {
        let opacity = this.state.headerImageOpacity;
        return (
            <View style={styles.header}>
                <Animated.View style={[styles.headerImage, { opacity }]}>
                    <ImageBackground
                        style={styles.headerImage}
                        source={bagro} />

                </Animated.View>
                <View style={styles.headerCard} />
            </View>
        );
    }
}

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
                    <View style={[styles.details, { marginLeft: 15 }]}>
                        <DetailsButton />
                    </View>
                    <Text style={[styles.day, { width: 140, textAlign: 'right' }]}>
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
                <Text style={[styles.center, { fontSize: 15, }]}>
                    {name}
                </Text>
            </View>
        );
    }
}

const gomesImage = { uri: 'https://media.gettyimages.com/photos/kurt-zouma-of-everton-celebrates-after-scoring-his-teams-first-goal-picture-id1081775044?s=2048x2048' }

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
                        // source={newsImage} />
                        source={gomesImage} />
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
    header: {
        height: Dimensions.get('screen').height * 0.075,
    },
    headerImage: {
        height: Dimensions.get('screen').height * 0.1,
    },
    headerCard: {
        height: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').width,
        borderRadius: 20,
        backgroundColor: '#F4F4F4',
        translateY: -(Dimensions.get('screen').height * 0.04),
    },
    matchCard: {
        width: 290,
        height: 150,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
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
        color: '#a9a9a9',
        justifyContent: 'flex-end'
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