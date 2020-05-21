import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
    Easing,
    Animated,
    Dimensions,
} from 'react-native'
import NewsCardList from './news/NewsCardList'
import FixtureCardList from './fixture/FixtureCardList'
import { observer } from 'mobx-react'
import { newsStore } from './store/NewsStore'
import { fixturesStore } from './store/FixturesStore'

@observer
export default class TeamNewsScreen extends Component {
    /**
     * @param props.closeDrawer DrowerMenuを閉じる 
     * @param state.viewOpacity 遷移後にMainCardのopacity
     */
    constructor(props) {
        super(props)
        this.state = {
            viewOpacity: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(this.state.viewOpacity, {
            toValue: 1,
            duration: 500,
            easing: Easing.exp,
            useNativeDriver: false
        }).start()
        newsStore.updateNewsList()
        fixturesStore.updateFixtures()
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
    render() {
        let opacity = this.state.viewOpacity
        return (
            <Animated.View style={[{ opacity, backgroundColor: '#333333' }]}>
                <View >
                    <FixtureCardList />
                </View>
                <View styles={[{backgroundColor: '#333333'}]} >
                    <NewsCardList />
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
});
