import axios from 'axios'
import {newsApiKey as apiKey} from '../../app.json';

const endPoint = 'https://newsapi.org/v2/everything?'

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
export const updateEverythingNews = async (updateNews) => {
    fetchEverythingNews('everton')
        .then(news => updateNews(news))
}

/**
 * @param q 検索文字列
 */
async function fetchEverythingNews(q) {
    const url = endPoint + 'q=' + q + '&sortBy=publishedAt&language=en'
    const headers = { 'X-Api-Key': apiKey, }
    return await axios.get(url, {headers})
        .then(response => {
            console.log("succeeded to connect by http: " + response.data.status) 
            if (response.data.totalResults != null) {
                console.log("total Results: " + response.data.totalResults)
            }
            return response.data.articles
        })
        .catch(error => {
            console.log("error: " + error.message + ', url: ' + endPoint)
            return Promise.reject(error);
        })
}