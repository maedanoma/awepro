import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import Card from '../../components/card/Card';
import PropTypes from 'prop-types'

/**
 * ニュース概要を表示するカード
 */
export default class NewsCard extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        // NewsCard押下時の動作
        onPress: PropTypes.func.isRequired,
        // ニュース情報
        article: {
            publishedAt: PropTypes.string.isRequired, // ニュースの日付
            image: PropTypes.string.isRequired, // ニュースの画像
            title: PropTypes.string.isRequired, // ニュースのタイトル
        }
    }

    // ニュースが押されたときに動く
    onPressNews() {
        // startTimingAnimation()
    }
    componentWillUnmount() {
        // stopAnimation()
    }
    render() {
        let newsDay = this.props.article.publishedAt.substring(0, 10)
        let newsImage = { uri: this.props.article.image }
        let title = this.props.article.title
        return (
            <View style={[styles.newsCard]}>
                <Card onPress={this.props.onPress}>
                    <Image style={styles.newsImage} source={newsImage} />
                    <Text style={[styles.newsDay, { margin: 4 }]}>{newsDay}</Text>
                    <Text style={[styles.newsTitleText]} numberOfLines={2}>{title}</Text>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    newsCard: {
        height: Dimensions.get('screen').height * 0.4,
        width: Dimensions.get('screen').width * 0.96,
        // borderRadius: 25,
        backgroundColor: '#FFFFFF',
        margin: Dimensions.get('screen').width * 0.02,
    },
    newsImage: {
        height: Dimensions.get('screen').height * 0.28,
        width: Dimensions.get('screen').width * 0.96,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    newsTitleText: {
        width: Dimensions.get('screen').width * 0.9,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    newsDay: {
        width: Dimensions.get('screen').width * 0.9,
        color: '#A9A9A9',
        fontSize: 16,
    },
});