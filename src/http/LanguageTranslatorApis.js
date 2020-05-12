import axios from 'axios'
import {
    translatorApiKey as apiKey,
    translatorServiceInstance as instance
} from '../../app.json';

const endPoint = 'https://api.jp-tok.language-translator.watson.cloud.ibm.com/'
const instances = 'instances/' + instance + '/'
const method = 'v3/translate?version=2018-05-01'

export const translateEnToJa = async (enTexts) => {
    translate(enTexts)
}

/**
 * @param texts     翻訳したい文字列の配列 
 * @param modelId   翻訳モデル, 何語から何語に翻訳するか
 *                  (e.g. english to japanese → en-ja)
 */
async function translate(texts, modelId = "en-ja") {
    let url = endPoint + instances + method
    let body = { text: texts, model_id: modelId } 
    let headers = {
        auth: { username: 'apiKey', password: apiKey }
    }
    return await axios.post(url, body, headers)
        .then(response => {
            console.log("succeeded to connect by http.") 
            if (response.data == null) {
                console.log("failed to translate.") 
                return []
            }
            return response.data.translations
        })
        .catch(error => {
            console.log("error: " + error.message)
            return Promise.reject(error);
        })
}