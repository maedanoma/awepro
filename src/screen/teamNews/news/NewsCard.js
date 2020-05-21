import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'
import { observer } from 'mobx-react-lite'
import CardAnimationContext from '../store/CardAnimationStore'
import Card from '../../../components/card/Card'
import ExpandVertical from '../../../components/animation/expand/ExpandVertical'
import FadeIn from '../../../components/animation/FadeIn'
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'

/**
 * ニュース概要を表示するカード
 */
const NewsCard = observer(props => {
    let newsDay = props.article.publishedAt.substring(0, 10)
    let newsImage = { uri: props.article.image }
    let { popUp, cardStatus } = React.useContext(CardAnimationContext)
    let height = cardStatus[props.id].height
    let imageHeight = cardStatus[props.id].imageHeight
    const onPress = () => {
        popUp(props.id)
    }
    const Detail = () => (
        !cardStatus[props.id].pop? <View/>:
            <FadeIn duration={1000} delay={700}>
                <Div div={6}/>
                <Text style={[styles.newsDetailText]} numberOfLines={4}>{props.article.description}</Text>
                <Div div={6}/>
                ソースに飛ぶボタン
            </FadeIn>
    )
    return (
        <ExpandVertical style={[{ margin: 8 }]}
            sets={{ from: DimHeight * 0.4, to: height.value }} delay={height.delay}>
            <Card style={[styles.newsCard]} onPress={onPress}>
                <ExpandVertical style={[{}]}
                    sets={{ from: DimHeight * 0.28, to: imageHeight.value}}  delay={imageHeight.delay}>
                    <Image style={styles.newsImage} source={newsImage} />
                </ExpandVertical>
                <Text style={styles.newsDay}>{newsDay}</Text>
                <Text style={[styles.newsTitleText]} numberOfLines={2}>{props.article.title}</Text>
                <Detail />
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
    //     description: PropTypes.string.isRequired, // ニュースの詳細
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
        height: '100%',
        width: DimWidth * 0.96,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    newsTitleText: {
        width: DimWidth * 0.9,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#CCCCCC',
    },
    newsDetailText: {
        width: DimWidth * 0.89,
        fontSize: 15,
        color: '#DDDDDD',
    },
    newsDay: {
        width: DimWidth * 0.9,
        color: '#A9A9A9',
        fontSize: 16,
        margin: 4
    },
});