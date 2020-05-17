import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

const Card = props => {
    let width = props.width
    let height = props.height
    let backgroundColor = props.color
    let borderRadius = props.radius
    let borderWidth = props.borderWidth
    let borderColor = props.borderColor
    return (
        <TouchableOpacity
            style={[{ width, height, backgroundColor, borderRadius, 
                borderWidth, borderColor, alignItems: 'center' }]}
            onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    );
}

Card.propTypes = {
    onPress: PropTypes.func.isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    radius: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
}
Card.defaultProps = {
    // Animated.View で囲んでアニメーションさせる場合、100%にしないと拡大されない
    // 指定したサイズのまま出てしまう。
    height: '100%', 
    width: '100%',
    color: '#FFFFFF',
    radius: 20,
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0)', // 透明
}

export default Card;