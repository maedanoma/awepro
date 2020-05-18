import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'

const MenuButton = props => {
    let backgroundColor = props.color
    return (
        <TouchableOpacity style={styles.hamburgerArea} onPress={props.onPress}>
            <View style={[styles.hamburgerLine, { backgroundColor }]} />
            <View style={[styles.hamburgerLine, { backgroundColor }]} />
            <View style={[styles.hamburgerLine, { backgroundColor }]} />
        </TouchableOpacity>
    )
}

MenuButton.propTypes = {
    color: PropTypes.string,
}
MenuButton.defaultProps = {
    color: '#FFFFFF'
}

export default MenuButton

const styles = StyleSheet.create({
    hamburgerArea: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hamburgerLine: {
        width: 25,
        height: 3,
        margin: 2,
        borderRadius: 2,
    },
});