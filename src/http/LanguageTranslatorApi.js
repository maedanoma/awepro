// import axios from 'axios'
import AxiosWrapper from './AxiosWrapper'
import {
    translatorApiKey as apiKey,
    translatorServiceInstance as instance
} from '../../app.json';

const instances = 'instances/' + instance
const axios = new AxiosWrapper(
    'https://api.jp-tok.language-translator.watson.cloud.ibm.com/' + instances)

/**
 * {
 *  "translations": [{
 *          "translation": "Hola"
 *      }
 *  ],
 *  "word_count": 1,
 *  "character_count": 5
 * }
 */

/**
 * 英語から日本語に翻訳します
 * @param enTexts       翻訳したい文字列の配列
 * @param translated 
 */
export const translateEnToJa = async (enTexts,translated) => {
    translate(enTexts).then(translatedTexts => translated(translatedTexts))
}

/**
 * @param texts     翻訳したい文字列の配列 
 * @param modelId   翻訳モデル, 何語から何語に翻訳するか
 *                  (e.g. english to japanese → en-ja)
 */
async function translate(texts, modelId = "en-ja") {
    let endPoint = 'v3/translate?version=2018-05-01'
    let body = { text: texts, model_id: modelId } 
    let headers = {
        auth: { username: 'apiKey', password: apiKey }
    }
    return axios.post(endPoint, body, headers, data => data.translations)
}