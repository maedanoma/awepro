import AxiosWrapper from './AxiosWrapper'
import {footballApiKey as apiKey} from '../../app.json';

const evertonTeamId = 45
const plNinteenTwenty = 524
const axios = new AxiosWrapper('https://v2.api-football.com')

/**
 * {
 *  api: {
 *      results: 38
 *      fixtures: [{
 *              fixture_id: 157019
 *              league_id: 524
 *              league: {
 *                  name: "Premier League"
 *                  country: "England"
 *                  logo: "https://media.api-sports.io/football/leagues/39.png"
 *                  flag: "https://media.api-sports.io/flags/gb.svg"
 *              }
 *              event_date: "2019-08-10T14:00:00+00:00"
 *              event_timestamp: 1565445600
 *              firstHalfStart: 1565445600
 *              secondHalfStart: 1565449200
 *              round: "Regular Season - 1"
 *              status: "Match Finished"
 *              statusShort: "FT"
 *              elapsed: 90
 *              venue: "Selhurst Park"
 *              referee: "J. Moss"
 *              homeTeam: {
 *                  team_id: 52
 *                  team_name: "Crystal Palace"
 *                  logo: "https://media.api-sports.io/football/teams/52.png"
 *              }
 *              awayTeam: {
 *                  team_id: 45
 *                  team_name: "Everton"
 *                  logo: "https://media.api-sports.io/football/teams/45.png"
 *              }
 *              goalsHomeTeam: 0
 *              goalsAwayTeam: 0
 *              score: {
 *                  halftime: "0-0"
 *                  fulltime: "0-0"
 *                  extratime: null
 *                  penalty: null
 *              }
 *          },
 *          {...}
 *      ]
 *  }
 * }
 */

/**
 * 今シーズンの試合結果、試合予定を取得します
 * @param updateFixtures 
 */
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
    let league = (leagueId == null || leagueId.length == 0)? '': '/' + leagueId
    let endPoint = 'fixtures/team/' + teamId + league
    const headers = { 'X-RapidAPI-Key': apiKey, }
    return axios.get(endPoint, '', headers, data => data.api.fixtures)
}

/**
 * あるシーズンの全試合のうち終了した試合のみを返します
 * @param fixtures あるシーズンの全試合
 */
function getFinishedMatches(fixtures) {
    return fixtures.filter(fixture => {
        return fixture.status == "Match Finished"
    })
}