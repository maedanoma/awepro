import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types'

const Card = props => {
    // default value
    let backgroundColor = '#FFFFFF'
    let borderRadius = 20
    let borderWidth = 0
    let borderColor = 'rgba(0, 0, 0, 0)' // 透明
    return (
        <TouchableOpacity
            style={[{ backgroundColor, borderRadius, borderWidth, 
                borderColor, alignItems: 'center', ...props.style }]}
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