import React from 'react';
import { observable, action } from 'mobx'
import { DimHeight, DimWidth } from '../../../components/Layout';

const standard = {
    fixture: {
        x: {
            value: 0,
            delay: 600
        }
    },
    card: {
        height: {
            value: DimHeight * 0.4,
            delay: 0
        },
        width: DimWidth * 0.96,
        margin: DimWidth * 0.02,
    },
    list: {
        height: {
            value: DimHeight * 0.62,
            delay: 600
        },
        scrollEnabled: true,
        y: {
            value: 0,
            delay: 300
        }
    },
    pop: false,
}
const popUp = {
    fixture: {
        x: {
            value: DimWidth,
            delay: 0,
        }
    },
    card: {
        height: {
            value: DimHeight * 0.7, // 0.82がぴったり
            delay: 600
        },
        width: DimWidth,
        marign: 0,
    },
    list: {
        height: {
            value: DimHeight * 0.84,
            delay: 0
        },
        scrollEnabled: false,
        y: {
            value: -(DimHeight * 0.25),
            delay: 300
        }
    },
    pop: true
}

class CardAnimationStore { 
    @observable status = standard
    
    @action.bound popUp() {
        console.log('before = ' + this.status == popUp)
        this.status = this.status.pop? standard: popUp
        console.log('after = ' + this.status == popUp)
    }

    @action.bound popDown() {
        this.status = standard
    }
}

const cardAnimationStore = new CardAnimationStore()
const CardAnimationContext = React.createContext(cardAnimationStore)
export default CardAnimationContext