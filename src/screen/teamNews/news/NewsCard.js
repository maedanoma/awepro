import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import { observer } from 'mobx-react-lite'
import CardAnimationContext from '../store/CardAnimationStore'
import Card from '../../../components/card/Card';
import ExpandVertical from '../../../components/animation/expand/ExpandVertical'
import PropTypes from 'prop-types'
import { DimHeight } from '../../../components/Layout'

/**
 * ニュース概要を表示するカード
 */
const NewsCard = observer(props => {
    let newsDay = props.article.publishedAt.substring(0, 10)
    let newsImage = { uri: props.article.image }
    let title = props.article.title
    let { popUp, status } = React.useContext(CardAnimationContext)
    let height = status.card.height
    return (
        <ExpandVertical style={[{ margin: 8 }]}
            sets={{ from: DimHeight * 0.4, to: height.value }} delay={height.delay}>
            <Card style={[styles.newsCard]} onPress={popUp}>
                <Image style={styles.newsImage} source={newsImage} />
                <Text style={[styles.newsDay, { margin: 4 }]}>{newsDay}</Text>
                <Text style={[styles.newsTitleText]} numberOfLines={2}>{title}</Text>
            </Card>
        </ExpandVertical>
    );
})

NewsCard.propTypes = {
    // ニュース情報
    article: PropTypes.object.isRequired
    //     publishedAt: PropTypes.string.isRequired, // ニュースの日付
    //     image: PropTypes.string.isRequired, // ニュースの画像
    //     title: PropTypes.string.isRequired, // ニュースのタイトル
}

export default NewsCard

const styles = StyleSheet.create({
    newsCard: {
        height: '100%',
        width: '100%',
        borderRadius: 25,
        backgroundColor: '#3F3F3F',
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
        color: '#CCCCCC',
    },
    newsDay: {
        width: Dimensions.get('screen').width * 0.9,
        color: '#A9A9A9',
        fontSize: 16,
    },
});