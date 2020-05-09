import axios from 'axios'
import {footballApiKey as apiKey} from '../../app.json';

const evertonTeamId = 45
const plNinteenTwenty = 524
const endPoint = 'https://v2.api-football.com/fixtures/team/'

export const updateAllMatchesInSeason = async (updateFixtures) => {
    fetchMatchesByTeam(evertonTeamId, plNinteenTwenty)
        .then(fixtures => updateFixtures(fixtures))
}

/**
 * チームを元に試合結果を取得します。
 * @param teamId    チームID
 * @param leagueId  リーグID
 */
async function fetchMatchesByTeam(teamId, leagueId = '') {
    const headers = {
        'X-RapidAPI-Key': apiKey,
    }
    let league = (leagueId == null || leagueId.length == 0)? '': '/' + leagueId
    let requestUrl = endPoint + teamId + league
    return await axios.get(requestUrl, {headers})
        .then(response => {
            console.log("success http connection")
            return response.data.api.fixtures
            // return getFinishedMatches(response.data.api.fixtures)
        })
        .catch(error => {
            console.log("error: " + error.api.error)
            return Promise.reject(error);
        })
}

/**
 * あるシーズンの全試合のうち終了した試合のみを返します
 * 
 * @param fixtures あるシーズンの全試合
 */
function getFinishedMatches(fixtures) {
    return fixtures.filter(fixture => {
        return fixture.status == "Match Finished"
    })
}