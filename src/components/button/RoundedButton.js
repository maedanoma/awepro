import React from 'react';
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

/**
 * ボタンのカラーパターン
 */
export const ColorPattern = {
    normal: {
        buttonColor: '#004095',
        buttonNameColor: '#FFFFFF',
        buttonBorderColor: '#004095'
    },
    reverse: {
        buttonColor: '#FFFFFF',
        buttonNameColor: '#004095',
        buttonBorderColor: '#004095'
    }
};

/**
 * 角が丸いボタン
 */
const RoundedButton = props => {
    return (
        <BaseButton
            onPress={props.onPress}
            name={props.name}
            height={props.height}
            width={props.width}
            buttonColor={props.colorPattern.buttonColor}
            radius={props.radius}
            borderColor={props.colorPattern.buttonBorderColor}
            fontSize={props.fontSize}
            nameColor={props.colorPattern.buttonNameColor}>
        </BaseButton>
    );
}

RoundedButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    colorPattern: PropTypes.object,
    radius: PropTypes.number,
    fontSize: PropTypes.number,
}
RoundedButton.defaultProps = {
    // heght, widthのデフォルト値はBaseButton参照
    colorPattern: ColorPattern.normal,
    radius: 30,
    fontSize: 23,
}

export default RoundedButton;