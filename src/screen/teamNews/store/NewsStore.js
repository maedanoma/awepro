import React from 'react';
import { observable, action } from 'mobx'
import { updateNews } from '../../../http/GoogleNewsApi'

const defaultNews = [
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

class NewsStore { 
    @observable newsList = []
    
    @action.bound updateNewsList() {
        this.newsList = defaultNews
        // updateNews(allNews => {
        //     this.newsList = allNews == null || allNews.length == 0?
        //         null: allNews.slice(0, 10)
        // })
    }
}

export const newsStore = new NewsStore()
const NewsContext = React.createContext(newsStore)
export default NewsContext