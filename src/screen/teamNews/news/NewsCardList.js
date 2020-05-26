import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native'
import { updateNews } from '../../../http/GoogleNewsApi'
import NewsCard from './NewsCard'
import CardList from '../../../components/card/CardList'
import { TitleLabel } from '../../../components/text/Text'
import NewsContext from '../store/NewsStore'
import { observer } from 'mobx-react-lite';
import { DimHeight } from '../../../components/Layout';
import SlideVertical from '../../../components/animation/slide/SlideVertical';
import ExpandVertical from '../../../components/animation/expand/ExpandVertical';
import SlideHorizontal from '../../../components/animation/slide/SlideHorizontal';

const NewsCardList = observer(props => {
    let { newsList, status, topPosition } = React.useContext(NewsContext)
    let x = status.fixture.x
    let y = status.list.y
    let cardHeight = DimHeight * 0.422
    let height = status.list.height
    let count = 0
    const displayNews = newsList.map(article => (
        <NewsCard
            id={count}
            key={count++}
            article={article} />
    ))
    return (
        <View>
            <SlideHorizontal style={[{}]} x={x.value} delay={x.delay}>
                <TitleLabel>NEWS</TitleLabel>
            </SlideHorizontal>
            <SlideVertical style={[{}]} y={y.value} delay={y.delay}>
                <ExpandVertical style={[{}]}
                    sets={{ from: DimHeight * 0.67, to: height.value}} delay={height.delay}>
                    <CardList
                        initialCardPosition={topPosition}
                        cardHeight={cardHeight}
                        contents={newsList}
                        scrollEnabled={status.list.scrollEnabled} >
                        {displayNews}
                    </CardList>
                </ExpandVertical>
            </SlideVertical>
        </View>
    )
})

export default NewsCardList