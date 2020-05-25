import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Linking
} from 'react-native'
import { observer } from 'mobx-react-lite'
import FixturesContext from '../store/FixturesStore'
import ExpandHorizontal from '../../../components/animation/expand/ExpandHorizontal'
import Fade from '../../../components/animation/Fade'
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'
import Button from '../../../components/button/Button'

/**
 * ニュース概要を表示するカード
 */
const FixtureDetail = observer(props => {
    let { fixtureCardStatus } = React.useContext(FixturesContext)
    let detailFade = fixtureCardStatus[props.id].detailFade
    return (
        <Fade sets={{from: 0, to: detailFade.value }} delay={detailFade.delay}
            startWhen={false} duration={detailFade.duration}>
            <Div div={6} />
            <Text style={[styles.newsDetailText]} numberOfLines={5}>aaaaaaaaaaaaaaaaaa</Text>
            {/* <Div div={8} />
            <View style={[{ alignItems: 'center' }]}>
                <ExpandHorizontal style={[{}]} startWhen={true} delay={800}
                    sets={{ from: DimWidth * 0.5, to: DimWidth * 0.9 }} >
                    <Button style={styles.jumpToSite} fontSize={17} onPress={opneUrl}>
                        JUMP TO SOURCE SITE
                    </Button>
                </ExpandHorizontal>
            </View> */}
        </Fade>
    )
})

FixtureDetail.propTypes = {
    // ニュース情報
    fixture: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
    //     description: PropTypes.string.isRequired, // ニュースの詳細
    //     url: PropTypes.string.isRequired, // ニュースのソース
}

export default FixtureDetail

const styles = StyleSheet.create({
    newsDetailText: {
        height: DimHeight * 0.16,
        width: DimWidth * 0.89,
        fontSize: 15,
        color: '#DDDDDD',
    },
    jumpToSite: {
        height: DimHeight * 0.06,
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#4689FF',
    },
});