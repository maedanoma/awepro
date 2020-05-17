import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';

export const DimHeight = Dimensions.get('screen').height
export const DimWidth = Dimensions.get('screen').width
export const Div = props =>
    <View style={[{marginTop: props.div}]} />



