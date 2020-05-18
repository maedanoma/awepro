import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'

const Button = props => {
    let fontSize = props.fontSize
    let color = props.nameColor
    return (
        <TouchableOpacity
            style={[styles.button, { ...props.style }]}
            onPress={props.onPress}
            activeOpacity={1} >
            <Text style={[styles.text, { fontSize, color}]}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    nameColor: PropTypes.string,
}
Button.defaultProps = {
    fontSize: 23,
    nameColor: '#FFFFFF',
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
});