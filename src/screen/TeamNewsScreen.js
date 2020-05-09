import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Alert,
    Easing,
    Animated,
    Dimensions,
} from 'react-native';
import {
    MatchesCard,
    NewsCard,
} from '../components/Card'
import { ProgressBar } from '../components/Progress'

const gomesImage = { uri: 'https://media.gettyimages.com/photos/kurt-zouma-of-everton-celebrates-after-scoring-his-teams-first-goal-picture-id1081775044?s=2048x2048' }

export default class TeamNewsScreen extends Component {
    /**
     * @param props.closeDrawer DrowerMenuを閉じる 
     * @param state.viewOpacity 遷移後にMainCardのopacity
     */
    constructor(props) {
        super(props)
        this.state = {
            viewOpacity: new Animated.Value(0),
            fixtures: []
        }
    }

    UNSAFE_componentWillMount() {
        // TODO APIで試合結果をとりに行く
    }

    _updateFixtures(allMatches) {
        allMatches == null? null:
        this.setState({ fixtures: allMatches.reverse() })
    }

    componentDidMount() {
        Animated.timing(this.state.viewOpacity, {
            toValue: 1,
            duration: 500,
            easing: Easing.exp,
            useNativeDriver: false
        }).start()
    }

    componentWillUnmount() {
        Animated.timing(this.state.viewOpacity).stop()
    }

    /**
     * MatchCardを押された時にMatchの詳細を表示する
     * 
     * DrawerMenuも閉じる
     */
    _onPressMatch() {
        this.props.closeDrawer()
        Alert.alert('This function under construction!')
    }

    /**
     * NewsCardまたはSeeMoreが押された時にNewsの詳細を表示する
     * 
     * DrawerMenuも閉じる
     */
    _onPressSeeMore() {
        this.props.closeDrawer()
        Alert.alert('This function under construction!')
    }

    _onContentSizeChange() {
        let matchCardWidth = 240
        this.scrollView.scrollTo({ x: 0 * matchCardWidth, y: 0, animated: false });
    }

    render() {
        let opacity = this.state.viewOpacity
        let fixtures = this.state.fixtures
        const displayMatches = fixtures.map((fixture) => {
            let homeLogo = { uri: fixture.homeTeam.logo }
            let awayLogo = { uri: fixture.awayTeam.logo }
            return (
                <MatchesCard
                    key={fixture.fixture_id}
                    onPressMatch={this._onPressMatch.bind(this)}
                    matchDay={fixture.event_date.substring(0, 10)}
                    homeTeamName={fixture.homeTeam.team_name}
                    homeTeamLogo={homeLogo}
                    homeTeamGoals={fixture.goalsHomeTeam}
                    awayTeamName={fixture.awayTeam.team_name}
                    awayTeamLogo={awayLogo}
                    awayTeamGoals={fixture.goalsAwayTeam} />
            )
        })
        return (
            <Animated.View style={[{ opacity }]}>
                <View style={styles.matches}>
                    <Text style={styles.titleText}>FIXTURES</Text>
                    {fixtures.length == 0 ?
                        <View style={styles.progress}>
                            <ProgressBar message='fetch fixtures...' />
                        </View> :
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={0}
                            snapToInterval={240}
                            snapToAlignment={"left"}
                            ref={scrollView => this.scrollView = scrollView}
                            onContentSizeChange={this._onContentSizeChange.bind(this)}>
                            {displayMatches}
                        </ScrollView>
                    }
                </View>
                <View style={styles.news}>
                    <Text style={styles.titleText}>NEWS</Text>
                    <ScrollView>
                        <NewsCard
                            onPressSeeMore={this._onPressSeeMore.bind(this)}
                            newsImage={gomesImage}
                            title='アンドレ・ゴメスが esports の大会でスターリングに敗退！ああああああああああああああああああああああああああ'
                            newsDay='2019/20/20' />
                        <NewsCard />
                    </ScrollView>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    matches: {
        height: Dimensions.get('window').height * 0.23,
        marginTop: Dimensions.get('window').height * 0.015
    },
    progress: {
        height: Dimensions.get('window').height * 0.23 - 25,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    news: {
        height: Dimensions.get('window').height * 0.66
    },
    titleText: {
        height: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004095',
        textAlign: 'center'
    },
});