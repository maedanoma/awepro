import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    ImageBackground,
} from 'react-native';
import { observer } from 'mobx-react-lite'
import { DimHeight, DimWidth, Div } from '../../components/Layout'
import MenuButton from '../../components/button/MenuButton'
import Button from '../../components/button/Button'
import FadeIn from '../../components/animation/FadeIn'
import MenuContext, {Menus} from './store/MenusStore'
import ToggleMenuContext from './store/ToggleMenuStore'

// const header = {uri: 'https://media.gettyimages.com/photos/richarlison-of-everton-celebrates-with-teammates-after-scoring-his-picture-id1208180963?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dan-gosling-of-everton-is-congratulated-by-teammate-leighton-baines-picture-id84650304?s=2048x2048'}
// const header = {uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-of-everton-celebrates-with-teammates-after-his-picture-id1192480863?s=2048x2048'}
const header = { uri: 'https://media.gettyimages.com/photos/dominic-calvertlewin-and-richarlison-of-everton-celebrate-only-for-picture-id1209910938?s=2048x2048' }

const BackgroundMenu = observer(props => {
    let { setMenu } = React.useContext(MenuContext)
    let { toggleMenu } = React.useContext(ToggleMenuContext)
    const menus = () => (
        Menus.map(menu => 
            <View key={menu.id}>
                <Div div={14} />
                <Button style={styles.menu}
                    name={menu.name}
                    onPress={() => setMenu(menu)}
                    bold={true} />
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
                        <MenuButton onPress={toggleMenu} />
                    </View>
                    {menus()}
                </ImageBackground>
            </FadeIn>
        </View>
    )
})

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