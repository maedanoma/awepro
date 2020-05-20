import React from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types'

const Card = props => {
    return (
        <TouchableOpacity
            style={[styles.default, { ...props.style }]}
            onPress={props.onPress}
            activeOpacity={1}>
            {props.children}
        </TouchableOpacity>
    );
}

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
    }
})