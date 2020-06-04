import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types'

export const DimHeight = Dimensions.get('screen').height
export const DimWidth = Dimensions.get('screen').width
export const Div = props => (
    props.horizontal?
        <View style={[{marginLeft: props.div}]} />:
        <View style={[{marginTop: props.div}]} />
)
Div.propTypes = {
    horizontal: PropTypes.bool
}
Div.defaultProps = {
    horizontal: false
}



