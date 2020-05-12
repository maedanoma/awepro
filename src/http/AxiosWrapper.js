import axios from 'axios'

/**
 * axiosのwrapper
 */
export default class AxiosWrapper {
    /**
     * @param hostName  ホスト名
     *      (e.g. https://api.jp-tok.language-translator.watson.cloud.ibm.com/)
     */
    constructor(hostName) {
        this.hostName = hostName
        this.handleError = error => {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('failed to connect.')
            if (error.response) {
                console.log('data: ' + error.response.data);
                console.log('status: ' + error.response.status + 
                        ':' + error.response.statusText);  // 400:Bad Request
                console.log('headers: ' + error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log('request: ' + error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('message: ' + error.message);
            }
            console.log('config: ' + error.config);
            return Promise.reject(error);
        }
    }
    
    /**
     * axiosを使ったget
     * @param endPoint      エンドポイント(e.g. v3/translate)
     * @param reqParam      リクエストパラメータ(e.g. q=everton&sortBy=publishedAt&language=en) 
     * @param headers       ヘッダー
     * @param handleResult  通信に成功した時のレスポンスのボディ部
     */
    async get(endPoint, reqParam, headers, handleResult) {
        let url = this.hostName + '/' + endPoint +
            (reqParam == ''? '': '?' + reqParam)
        return this._execute(() => axios.get(url, {headers}), handleResult)
    }

    /**
     * axiosを使ったpost
     * @param endPoint      エンドポイント(e.g. v3/translate)
     * @param reqBody       リクエストのボディ部, json形式 
     * @param headers       ヘッダー
     * @param handleResult  通信に成功した時のレスポンスのボディ部
     */
    async post(endPoint, reqBody, headers, handleResult) {
        let url = this.hostName + '/' + endPoint
        return this._execute(() => axios.post(url, reqBody, headers), handleResult)
    }

    // delete() {}

    async _execute(doAxiosMethod, handleResult) {
        return await doAxiosMethod()
            .then(response => {
                console.log("succeeded to connect by http. status: " + response.status) 
                return handleResult(response.data)
            })
            .catch(this.handleError.bind(this))
    }
}