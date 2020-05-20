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
    let fontWeight = props.bold? 'bold': 'normal'
    return (
        <TouchableOpacity
            style={[styles.button, { ...props.style }]}
            onPress={props.onPress}
            activeOpacity={1} >
            <Text style={[styles.text, { fontSize, color, fontWeight}]}>
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
    bold: PropTypes.bool
}
Button.defaultProps = {
    fontSize: 23,
    nameColor: '#CCCCCC',
    bold: false
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