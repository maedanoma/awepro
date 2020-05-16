import React from 'react';
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

/**
 * リンクっぽいボタン
 */
const LinkButton = props => {
    return (
        <BaseButton
            onPress={props.onPress}
            name={props.name}
            height={props.height}
            width={props.width}
            fontSize={props.fontSize}
            nameColor={props.color}
            fontWeight={props.fontWeight}>
        </BaseButton>
    );
}

LinkButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    fontSize: PropTypes.number,
    bold: PropTypes.bool,
}

LinkButton.defaultProps = {
    // heght, widthのデフォルト値はBaseButton参照
    color: '#004095',
    bold: false,
    fontSize: 17,
}

export default LinkButton;