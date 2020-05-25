import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'
import { observer } from 'mobx-react-lite'
import NewsContext from '../store/NewsStore'
import ExpandVertical from '../../../components/animation/expand/ExpandVertical'
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'

/**
 * ニュース概要を表示するカード
 */
const NewsSummary = observer(props => {
    let newsDay = props.article.publishedAt.substring(0, 10)
    let { cardStatus } = React.useContext(NewsContext)
    let imageHeight = cardStatus[props.id].imageHeight
    let titleLines = cardStatus[props.id].titleLines
    return (
        <View style={[{alignItems: 'center'}]}>
            <ExpandVertical style={[{}]}
                sets={{ from: DimHeight * 0.28, to: imageHeight.value }} delay={imageHeight.delay}>
                <Image style={styles.newsImage} source={{ uri: props.article.image }} />
            </ExpandVertical>
            <Div div={5} />
            <View style={[{ flexDirection: 'row', width: DimWidth * 0.9 }]}>
                <Text style={styles.newsDay}>{newsDay}</Text>
                <Text style={styles.newsSource}>{props.article.source.name}</Text>
            </View>
            <Div div={3} />
            <Text style={[styles.newsTitleText]} numberOfLines={titleLines}>{props.article.title}</Text>
        </View>
    )
})

NewsSummary.propTypes = {
    // ニュース情報
    article: PropTypes.object.isRequired,
    //     publishedAt: PropTypes.string.isRequired, // ニュースの日付
    //     image: PropTypes.string.isRequired, // ニュースの画像
    //     title: PropTypes.string.isRequired, // ニュースのタイトル
    //     description: PropTypes.string.isRequired, // ニュースの詳細
    id: PropTypes.number.isRequired,
}

export default NewsSummary

const styles = StyleSheet.create({
    newsImage: {
        height: '100%',
        width: DimWidth * 0.96,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    newsTitleText: {
        height: DimHeight * 0.1,
        width: DimWidth * 0.9,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#CCCCCC',
    },
    newsDay: {
        width: DimWidth * 0.3,
        color: '#A9A9A9',
        fontSize: 16,
    },
    newsSource: {
        width: DimWidth * 0.6,
        color: '#A9A9A9',
        fontSize: 16,
        textAlign: 'right'
    },
});