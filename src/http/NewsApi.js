import AxiosWrapper from './AxiosWrapper'
import {newsApiKey as apiKey} from '../../app.json';

const axios = new AxiosWrapper('https://newsapi.org')

/**
 * {
 *  "status":"ok",
 *  "totalResults":1931,
 *  "articles":[{
 *      "source":{
 *          "id":"bbc-news",
 *          "name":"BBC News"
 *      },
 *      "author":null,
 *      "title":"Gossip: Chelsea keeping tabs on Arsenal's Aubameyang",
 *      "description":"Chelsea linked with several strikers, Barcelona want Tottenham midfielder, Everton look to Brazilian defender, plus more.",
 *      "url":"https://www.bbc.co.uk/sport/52420648",
 *      "urlToImage":"https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/30CC/production/_111929421_gossipimage.jpg",
 *      "publishedAt":"2020-04-24T19:42:20Z",
 *      "content":"Chelsea are keeping an eye on Pierre-Emerick Aubameyang's situation at Arsenal and hope to make a summer move for the 30-year-old Gabon striker. (ESPN)\r\nChelsea have agreed a one-year contract extension with French striker Olivier Giroud, 33. (Di Marzio - in … [+1444 chars]"
 *  },{...}
 * }
 */

/**
 * 全ての記事を取得します
 * @param updateNews 
 */
export const updateEverythingNews = async (updateNews) => {
    fetchEverythingNews('everton').then(articles => updateNews(articles))
}

/**
 * @param q 検索文字列
 */
async function fetchEverythingNews(q) {
    let endPoint = 'v2/everything'
    let param = 'q=' + q + '&sortBy=publishedAt&language=en'
    const headers = { 'X-Api-Key': apiKey, }
    return axios.get(endPoint, param, headers, data => data.articles)
}