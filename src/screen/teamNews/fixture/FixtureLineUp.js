import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native'
import { observer } from 'mobx-react-lite'
import FixtureContentContext from '../store/FixturesContentStore'
import PropTypes from 'prop-types'
import { DimWidth, Div, DimHeight } from '../../../components/Layout'
import FixtureEvents from './FixtureEvents'
import Button from '../../../components/button/Button'

const image = '../../../res/field.jpg'

/**
 * ラインナップを表示するカード
 */
const FixtureLineUp = observer(props => {
    // let { content, event, stats } = React.useContext(FixtureContentContext)
    return (
        <ScrollView style={styles.container} overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={1}>
                <ImageBackground style={styles.background} source={require(image)}>
                </ImageBackground>
                <Div div={DimHeight * 0.06}/>
            </TouchableOpacity>    
        </ScrollView>
    )
})

FixtureLineUp.propTypes = {
    // ニュース情報
    fixture: PropTypes.object.isRequired,
    //     description: PropTypes.string.isRequired, // ニュースの詳細
    //     url: PropTypes.string.isRequired, // ニュースのソース
    id: PropTypes.number.isRequired
}

export default FixtureLineUp

const styles = StyleSheet.create({
    container: {
        width: DimWidth,
        height: DimHeight * 0.65,
    },
    background: {
        width: DimWidth * 0.96,
        height: DimHeight * 1.175,
        marginHorizontal: DimWidth * 0.02
    }
})