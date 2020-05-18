import React from 'react';
import Expand from './Expand';
import FadeIn from './FadeIn';

export const FadeExpand = props => (
    <FadeIn>
        <Expand width={props.width} height={props.height} >
            {props.children}
        </Expand>
    </FadeIn>
)

