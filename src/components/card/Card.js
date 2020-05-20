import React from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types'

const Card = props => (
    <Animated.View style={[styles.default, ...props.style]}>
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={props.onPress}
            activeOpacity={1}>
            {props.children}
        </TouchableOpacity>
    </Animated.View>
)

Card.propTypes = {
    onPress: PropTypes.func.isRequired,
}

export default Card;

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 0,
        borderColor: 'rgba(0, 0, 0, 0)', // 透明
        alignItems: 'center'
    }, 
    touchableOpacity: {
        height: '100%',
        width: '100%',
        borderColor: 'rgba(0, 0, 0, 0)', // 透明
        alignItems: 'center'
    }
})