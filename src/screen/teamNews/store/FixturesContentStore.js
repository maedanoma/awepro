import React from 'react';
import { observable, action } from 'mobx'
import { DimWidth } from '../../../components/Layout';

const event = {
    event: {
        opacity: 1,
        underLineColor: '#4689FF'
    },
    stats: {
        opacity: 0.3,
        underLineColor: 'rgba(0, 0, 0, 0)',
    },
    left: 0,
    type: 'event',
}
const lineup = {
    event: {
        opacity: 0.3,
        underLineColor: 'rgba(0, 0, 0, 0)',
    },
    stats: {
        opacity: 1,
        underLineColor: '#4689FF',
    },
    left: -DimWidth,
    type: 'lineup',
}

class FixtureContentStore {
    @observable content = event
    
    @action.bound event() {
        if (this.content.type == 'event') return
        this.content = event
    }

    @action.bound lineup() {
        if (this.content.type == 'lineup') return
        this.content = lineup
    }
}

export const fixtureContentStore = new FixtureContentStore()
const FixtureContentContext = React.createContext(fixtureContentStore)
export default FixtureContentContext