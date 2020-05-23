import React from 'react';
import { observable, action } from 'mobx'
import { DimHeight, DimWidth } from '../../../components/Layout';
import { updateNews } from '../../../http/GoogleNewsApi'

const defaultNews = [
    {
        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
        "image":"https://media.gettyimages.com/photos/richarlison-of-everton-celebrates-with-teammates-after-scoring-his-picture-id1208180963?s=2048x2048",
        "publishedAt":"2020-05-12 04:36:00 UTC",
        "source":{
            "name":"sportwitness.co.uk",
            "url":"https:\/\/sportwitness.co.uk"
        }
    },
    {
        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
        "image":"https://media.gettyimages.com/photos/dan-gosling-of-everton-is-congratulated-by-teammate-leighton-baines-picture-id84650304?s=2048x2048",
        "publishedAt":"2020-05-12 04:36:00 UTC",
        "source":{
            "name":"sportwitness.co.uk",
            "url":"https:\/\/sportwitness.co.uk"
        }
    },
    {
        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
        "image":"https:\/\/images.gnews.io\/65bce391fc91d65d73d75370115563b8",
        "publishedAt":"2020-05-12 04:36:00 UTC",
        "source":{
            "name":"sportwitness.co.uk",
            "url":"https:\/\/sportwitness.co.uk"
        }
    },
    {
        "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
        "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
        "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
        "image":"https:\/\/images.gnews.io\/65bce391fc91d65d73d75370115563b8",
        "publishedAt":"2020-05-12 04:36:00 UTC",
        "source":{
            "name":"sportwitness.co.uk",
            "url":"https:\/\/sportwitness.co.uk"
        }
    },
]
// 
const standard = {
    fixture: {
        x: { value: 0, delay: 400 }
    },
    list: {
        height: { value: DimHeight * 0.62, delay: 600 },
        scrollEnabled: true,
        y: { value: 0, delay: 300 }
    },
    pop: false,
}
const popUp = {
    fixture: {
        x: { value: DimWidth, delay: 0, }
    },
    list: {
        height: { value: DimHeight * 0.84, delay: 0 },
        scrollEnabled: false,
        y: { value: -(DimHeight * 0.25), delay: 300 }
    },
    pop: true
}
// カード用
const cardStandard = {
    height: { value: DimHeight * 0.4, delay: 0 },
    imageHeight: { value: DimHeight * 0.28, delay: 0 },
    titleLines: 2,
    width: DimWidth,
    marign: 0,
    pop: false,
}
const cardPopUp = {
    height: { value: DimHeight * 0.77, delay: 0 },
    imageHeight: { value: DimHeight * 0.37, delay: 0 },
    titleLines: 3,
    width: DimWidth,
    marign: 0,
    pop: true
}

class NewsStore { 
    @observable newsList = []
    @observable status = standard
    @observable cardStatus = []
    @observable topPosition = 0
    
    @action.bound updateNewsList() {
        this.newsList = defaultNews
        this.cardStatus =
            new Array(this.newsList.length).fill(cardStandard)
        // updateNews().then(allNews => {
        //     this.newsList = allNews == null || allNews.length == 0?
        //         null: allNews.slice(0, 10)
        // })
    }

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

export const newsStore = new NewsStore()
const NewsContext = React.createContext(newsStore)
export default NewsContext