import React from 'react'
import { StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import NewsContext from '../store/NewsStore'
import Card from '../../../components/card/Card'
import ExpandVertical from '../../../components/animation/expand/ExpandVertical'
import Fade from '../../../components/animation/Fade'
import PropTypes from 'prop-types'
import { DimHeight } from '../../../components/Layout'
import NewsDetail from './NewsDetail'
import NewsSummary from './NewsSummary'

/**
 * ニュースカード
 */
const NewsCard = observer(props => {
    let { popUp, cardStatus } = React.useContext(NewsContext)
    let height = cardStatus[props.id].height
    return (
        <Fade duration={500} delay={500 * props.id}>
            <ExpandVertical style={[{ margin: 8 }]}
                sets={{ from: DimHeight * 0.4, to: height.value }} delay={height.delay}>
                <Card style={[styles.newsCard]} onPress={() => popUp(props.id)}>
                    <NewsSummary article={props.article} id={props.id} />
                    <NewsDetail article={props.article} id={props.id} />
                </Card>
            </ExpandVertical>
        </Fade>
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
});