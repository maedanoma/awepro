import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { RoundedButton } from '../components/Button'

/**
 * 試合結果を表示するカード
 */
export class MatchesCard extends Component {
    /**
     * (Required)
     * @param props.onPressMatch    試合カード押下時の動作
     * @param props.matchDay        試合日
     * @param props.matchTag        試合のタグ(e.g. PL, FA)
     * @param props.homeTeamName    ホームチーム名
     * @param props.homeTeamLogo    ホームチームのロゴ
     * @param props.homeTeamGoals   ホームチームのゴール数
     * @param props.awayTeamName    アウェイチーム名
     * @param props.awayTeamLogo    アウェイチームのロゴ
     * @param props.awayTeamGoals   アウェイチームのゴール数
     * @param state.wholeOpacity    カード全体のopacity
     */
    constructor(props) {
        super(props)
        this.state = {
            wholeOpacity: new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.timing(this.state.wholeOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }
    componentWillUnmount() {
        Animated.timing(this.state.wholeOpacity).stop()
    }
    render() {
        let opacity = this.state.wholeOpacity
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
            <Animated.View style={[{ opacity }]}>
                <TouchableOpacity style={styles.matchCard} onPress={this.props.onPressMatch}>
                    <TeamInfo image={this.props.homeTeamLogo} name={this.props.homeTeamName} goal={this.props.homeTeamGoals} />
                    <View style={[{ marginTop: 5 }]} />
                    <TeamInfo image={this.props.awayTeamLogo} name={this.props.awayTeamName} goal={this.props.awayTeamGoals} />
                    <View style={[{ marginTop: 5, alignItems: 'center' }]}>
                        <View style={styles.horizontal}>
                            <Text style={[styles.matchTag]}>{this.props.matchTag}PL</Text>
                            <View style={[{ marginLeft: 10 }]} />
                            <Text style={styles.day}>{this.props.matchDay}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

/**
 * ニュース概要を表示するカード
 */
export class NewsCard extends Component {
    /**
     * (Required)
     * @param props.onPressSeeMore  see moreボタン押下時の動作
     * @param props.newsImage       ニュースの画像
     * @param props.title           ニュースのタイトル
     * @param props.newsDay         ニュースの日付
     */
    constructor(props) {
        super(props)
    }
    render() {
        const DetailsButton = () => (
            <RoundedButton
                onPressButton={this.props.onPressSeeMore}
                buttonName='see more'
                buttonWidth={100}
                buttonExpandInitialWidth={100}
                buttonHeight={25} />
        );

        return (
            <TouchableOpacity style={[styles.newsCard]} onPress={this.props.onPressSeeMore}>
                <View style={styles.center}>
                    <Image style={styles.newsImage} source={this.props.newsImage} />
                </View>
                <Text style={[styles.newsTitleText, { margin: 5 }]} numberOfLines={2}>
                    {this.props.title}
                </Text>
                <View style={[styles.horizontal, styles.detailAndDay, { margin: 10 }]}>
                    <View style={[styles.details, { marginLeft: 15 }]}>
                        <DetailsButton />
                    </View>
                    <Text style={[styles.day, { marginLeft: 130 }]}>
                        {this.props.newsDay}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
        margin: Dimensions.get('screen').width * 0.02,
    },
    newsImage: {
        height: 200,
        width: Dimensions.get('screen').width * 0.91,
        borderRadius: 20,
        margin: 10,
    },
    newsTitleText: {
        height: 45,
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