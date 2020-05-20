import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native'
import FixtureCard from './FixtureCard'
import CardList from '../../../components/card/CardList'
import { TitleLabel } from '../../../components/text/Text'
import { observer } from 'mobx-react-lite'
import FixturesContext from '../store/FixturesStore'
import CardAnimationContext from '../store/CardAnimationStore'
import SlideHorizontal from '../../../components/animation/slide/SlideHorizontal';

const FixtureCardList = observer(props => {
    let { fixtures, initCardPosition } = React.useContext(FixturesContext)
    let { status } = React.useContext(CardAnimationContext)
    let fxt = status.fixture.x
    const displayMatches = fixtures.map(fixture => (
        <FixtureCard
            key={fixture.fixture_id}
            fixture={fixture} />
    ))
    return (
        <View>
            <SlideHorizontal style={[{}]} x={fxt.value} delay={fxt.delay}>
                <TitleLabel>FIXTURES</TitleLabel>
                <CardList
                    initialCardPosition={initCardPosition}
                    horizontal={true}
                    cardWidth={240}
                    cardAlign='left'
                    contents={fixtures}>
                    {displayMatches}
                </CardList>
            </SlideHorizontal>
        </View>
    )
})

export default FixtureCardList

const styles = StyleSheet.create({
    matches: {
        height: Dimensions.get('window').height * 0.23,
        marginTop: Dimensions.get('window').height * 0.015
    },
});
