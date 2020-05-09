import axios from 'axios'
import {footballApiKey as apiKey} from '../../app.json';

const evertonTeamId = 45
const plNinteenTwenty = 524
const requestUrl = 'https://v2.api-football.com/fixtures/team/'

export const updateAllMatchesInSeason = async (updateFixtures) => {
    fetchAllMatches(evertonTeamId, plNinteenTwenty)
        .then(fixtures => updateFixtures(fixtures))
}

async function fetchAllMatches(teamId, leagueId) {
    const headers = {
        'X-RapidAPI-Key': apiKey,
    }
    return await axios.get(requestUrl + teamId + '/' + leagueId, {headers})
        .then(response => {
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