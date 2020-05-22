import AxiosWrapper from './AxiosWrapper'
import { gNewsApiToken as apiToken } from '../../app.json'
import { translateEnToJa } from './LanguageTranslatorApi'

const axios = new AxiosWrapper('https://gnews.io/api')

/**
 * {
 *  "timestamp":1589286480,
 *  "articleCount":10,
 *  "articles":[{
 *          "title":"Everton target quizzed about future \u2013 \u201cI like English football a lot\u201d",
 *          "description":"For the past couple of weeks, one of the strongest rumours in the Argentine media has been about the River Plate midfielder Nicolas de la Cruz. Reports from Europe and South America have been claiming ...",
 *          "url":"https:\/\/sportwitness.co.uk\/everton-target-quizzed-future-i-like-english-football-lot\/",
 *          "image":"https:\/\/images.gnews.io\/65bce391fc91d65d73d75370115563b8",
 *          "publishedAt":"2020-05-12 04:36:00 UTC",
 *          "source":{
 *              "name":"sportwitness.co.uk",
 *              "url":"https:\/\/sportwitness.co.uk"
 *          }
 *      },{
 *      ...
 *      }
 *  ]
 * }
 */

/**
 * 全てのニュースを取得します
 * @param updateNews 
 */
export const updateNews = async () => {
    return fetchSearchNews('everton')
        .then(articles  => {
            let titles = articles.map(article => article.title)
            return translateEnToJa(titles)
                .then(translatedTitles => {
                    let count = 0
                    articles.map(article => {
                        article.title = translatedTitles[count++].translation
                        return article
                    })
                    let descriptions = articles.map(article => article.description)
                    return translateEnToJa(descriptions)
                }).then(translatedDescriptions => {
                    let count = 0
                    articles.map(article => {
                        article.description = translatedDescriptions[count++].translation
                        return article
                    })
                    return new Promise(resolve => {resolve(articles)})
                })
        })
}

/**
 * @param q 検索文字列
 */
async function fetchSearchNews(q) {
    let endPoint = 'v3/search'
    let param = 'q=' + q + '&lang=ja&token=' + apiToken
    return axios.get(endPoint, param, {}, data => data.articles)
}