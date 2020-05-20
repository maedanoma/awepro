import React from 'react';
import { Text } from 'react-native';
import { DimHeight } from '../Layout';

export const SmallMessage = props => (
    <Text style={[{ textAlign: 'center', color: '#AAAAAA' }]}>
        {props.children}   
    </Text>
)

export const TitleLabel = props => (
    <Text style={[{
        height: DimHeight * 0.035,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#CCCCCC',
        textAlign: 'center'}]}>
        {props.children}
    </Text>
)
