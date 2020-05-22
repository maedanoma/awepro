import React from 'react';
import { observable, action } from 'mobx'
import { DimHeight, DimWidth } from '../../../components/Layout';

const standard = {
    fixture: {
        x: {
            value: 0,
            delay: 400
        }
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

const cardStandard = {
    height: {
        value: DimHeight * 0.4,
        delay: 0
    },
    imageHeight: {
        value: DimHeight * 0.28,
        delay: 0
    },
    titleLines: 2,
    width: DimWidth,
    marign: 0,
    pop: false,
}

const cardPopUp = {
    height: {
        value: DimHeight * 0.77, // 0.82がぴったり
        delay: 0
    },
    imageHeight: {
        value: DimHeight * 0.37,
        delay: 0
    },
    titleLines: 3,
    width: DimWidth,
    marign: 0,
    pop: true
}

class NewsAnimationStore { 
    @observable status = standard
    @observable cardStatus = [
        cardStandard, cardStandard, cardStandard, cardStandard, cardStandard,
        cardStandard, cardStandard, cardStandard, cardStandard, cardStandard,
    ]
    @observable topPosition = 0
    
    @action.bound popUp(position) {
        if (this.cardStatus.every(status => !status.pop)) {
            this.topPosition = position
            this.status = popUp
            this.cardStatus[position] = cardPopUp
            return
        }
        if (this.cardStatus[position].pop) {
            this.status = standard
            this.cardStatus[position] = cardStandard
            return
        }
        this.status = standard
        this.cardStatus.fill(cardStandard)
    }

    @action.bound popDown() {
        this.status = standard
        this.cardStatus.fill(cardStandard)
    }
}

const newsAnimationStore = new NewsAnimationStore()
const NewsAnimationContext = React.createContext(newsAnimationStore)
export default NewsAnimationContext