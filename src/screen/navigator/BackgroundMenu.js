import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types'
import { DimHeight, DimWidth, Div } from '../../components/Layout'
import MenuButton from '../../components/button/MenuButton'
import Button from '../../components/button/Button'
import FadeIn from '../../components/animation/FadeIn'
import TeamNews from '../teamNews/TeamNewsScreen'
import Members from '../MembersScreen'

// const header = {uri: 'https://media.gettyimages.com/photos/richarlison-of-everton-celebrates-with-teammates-after-scoring-his-picture-id1208180963?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dan-gosling-of-everton-is-congratulated-by-teammate-leighton-baines-picture-id84650304?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-of-everton-celebrates-with-teammates-after-his-picture-id1192480863?s=2048x2048'}
const header = { uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-and-richarlison-of-everton-celebrate-only-for-picture-id1209910938?s=2048x2048' }

const Menus = [
    { id: 1, name: 'Home', component: <TeamNews /> },
    { id: 2, name: 'Members', component: <Members /> },
    { id: 3, name: 'News', component: <Members /> },
    { id: 4, name: 'Other', component: <Members /> }
]

const BackgroundMenu = props => {
    const menus = () =>  (
        Menus.map(menu =>
            <View key={menu.id}>
                <Div div={7} />
                <Button style={styles.menu}
                    name={menu.name}
                    fontSize={22}
                    onPress={props.onPressMenu(menu)} />
            </View>
        )
    )
    return (
        <View>
            <StatusBar translucent backgroundColor="transparent" />
            <FadeIn>
                <ImageBackground style={styles.container} source={header}>
                    <Div div={DimHeight * 0.03} />
                    <View style={[{ margin: 10 }]}>
                        <MenuButton onPress={props.onPressDrawer} />
                    </View>
                    {menus}
                </ImageBackground>
            </FadeIn>
        </View>
    )
}

BackgroundMenu.propTypes = {
    onPressDrawer: PropTypes.func.isRequired,
    onPressMenu: PropTypes.func.isRequired,
}

export default BackgroundMenu

const styles = StyleSheet.create({
    container: {
        height: DimHeight,
        width: DimWidth
    },
    menu: {
        width: 200,
        height: 25,
        backgroundColor: 'rgba(0, 0, 0, 0)' // 透明
    }
});