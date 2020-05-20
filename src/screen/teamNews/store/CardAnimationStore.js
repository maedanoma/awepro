import React from 'react';
import { observable, action } from 'mobx'
import { DimHeight, DimWidth } from '../../../components/Layout';

const standard = {
    height: DimHeight * 0.4,
    width: DimWidth * 0.96,
    borderRadius: 25,
    margin: DimWidth * 0.02,
    top: DimHeight * 0.365
}
const popUp = {
    height: DimHeight,
    width: DimWidth,
    borderRadius: 0,
    marign: 0,
    top: 0
}

class CardAnimationStore { 
    @observable status = standard
    
    @action.bound popUp() {
        this.status = this.status == popUp? standard: popUp 
    }

    @action.bound popDown() {
        this.status = standard
    }
}

const cardAnimationStore = new CardAnimationStore()
const CardAnimationContext = React.createContext(cardAnimationStore)
export default CardAnimationContext