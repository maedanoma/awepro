import React from 'react';
import { Text } from 'react-native';

export const SmallMessage = props => (
    <Text style={[{ textAlign: 'center', color: '#AAAAAA' }]}>
        {props.children}   
    </Text>
)

export const TitleLabel = props => (
    <Text style={[{
        height: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004095',
        textAlign: 'center'}]}>
        {props.children}
    </Text>
)
