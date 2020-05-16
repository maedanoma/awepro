import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'

const BaseButton = props => {
    let width = props.width
    let height = props.height
    let backgroundColor = props.buttonColor
    let borderRadius = props.radius
    let borderColor = props.borderColor
    let fontSize = props.fontSize
    let color = props.nameColor
    let fontWeight = props.bold? 'bold' : 'normal'

    return (
        <TouchableOpacity
            style={[styles.button, {
                width, height, backgroundColor, borderRadius, borderColor
            }]}
            onPress={props.onPress} >
            <Text style={[styles.text, { fontSize, color, fontWeight}]}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
}

BaseButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    buttonColor: PropTypes.string,
    radius: PropTypes.number,
    borderColor: PropTypes.string,
    fontSize: PropTypes.number,
    nameColor: PropTypes.string,
    fontWeight: PropTypes.bool,
}
BaseButton.defaultProps = {
    // Animated.View で囲んでアニメーションさせる場合、100%にしないと拡大されない
    // 指定したサイズのまま出てしまう。
    height: '100%', 
    width: '100%',
    buttonColor: 'rgba(0, 0, 0, 0)', // 透明
    radius: 0,
    borderColor: 'rgba(0, 0, 0, 0)', // 透明
    fontSize: 23,
    nameColor: '#000000',
    fontWeight: false
}

export default BaseButton;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    text: {
        textAlign: 'center',
    },
});