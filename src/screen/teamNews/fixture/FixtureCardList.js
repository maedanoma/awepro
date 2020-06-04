import React from 'react'
import { View } from 'react-native'
import FixtureCard from './FixtureCard'
import CardList from '../../../components/card/CardList'
import { TitleLabel } from '../../../components/text/Text'
import { observer } from 'mobx-react-lite'
import FixturesContext from '../store/FixturesStore'
import NewsContext from '../store/NewsStore'
import SlideHorizontal from '../../../components/animation/slide/SlideHorizontal'
import SlideVertical from '../../../components/animation/slide/SlideVertical'
import { DimWidth } from '../../../components/Layout'

const FixtureCardList = observer(props => {
    let { status } = React.useContext(NewsContext)
    let { labelStatus, fixtures, initCardPosition } = React.useContext(FixturesContext)
    let fxt = status.fixture.x
    let x = labelStatus.x
    let y = labelStatus.y
    let scrollEnabled = labelStatus.scrollEnabled
    let count = 0
    const displayMatches = fixtures.map(fixture => (
        <FixtureCard key={count} id={count++} fixture={fixture} />
    ))
    return (
        <View>
            <SlideHorizontal style={[{}]} x={fxt.value} delay={fxt.delay}>
                <SlideHorizontal style={[{}]} x={x.value} delay={x.delay}>
                    <TitleLabel>FIXTURES</TitleLabel>
                </SlideHorizontal>
                <SlideVertical style={[{}]} y={y.value} delay={y.delay}>
                    <CardList
                        initialCardPosition={initCardPosition}
                        horizontal={true}
                        cardWidth={DimWidth * 0.58}
                        cardAlign='left'
                        scrollEnabled={scrollEnabled}
                        contents={fixtures}>
                        {displayMatches}
                    </CardList>
                </SlideVertical>
            </SlideHorizontal>
        </View>
    )
})

export default FixtureCardList