import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Linking
} from 'react-native'
import { observer } from 'mobx-react-lite'
import NewsAnimationContext from '../store/NewsAnimationStore'
import ExpandHorizontal from '../../../components/animation/expand/ExpandHorizontal'
import FadeIn from '../../../components/animation/FadeIn'
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../../components/Layout'
import Button from '../../../components/button/Button'

/**
 * ニュース概要を表示するカード
 */
const NewsDetail = observer(props => {
    let { cardStatus } = React.useContext(NewsAnimationContext)
    const opneUrl = () => {
        Linking.openURL(props.article.url)
            .catch(err => console.error('URLを開けませんでした。', err));
    }
    return (
        !cardStatus[props.id].pop ? <View /> :
            <FadeIn duration={1000} delay={700}>
                <Div div={6} />
                <Text style={[styles.newsDetailText]} numberOfLines={5}>{props.article.description}</Text>
                <Div div={8} />
                <View style={[{ alignItems: 'center' }]}>
                    <ExpandHorizontal style={[{}]} startWhen={true} delay={800}
                        sets={{ from: DimWidth * 0.5, to: DimWidth * 0.9 }} >
                        <Button style={styles.jumpToSite} fontSize={17} onPress={opneUrl}>
                            JUMP TO SOURCE SITE
                        </Button>
                    </ExpandHorizontal>
                </View>
            </FadeIn>
    )
})

NewsDetail.propTypes = {
    // ニュース情報
    article: PropTypes.object.isRequired
    //     description: PropTypes.string.isRequired, // ニュースの詳細
    //     url: PropTypes.string.isRequired, // ニュースのソース
}

export default NewsDetail

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