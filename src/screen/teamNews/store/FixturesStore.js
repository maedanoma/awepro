import React from 'react';
import { observable, action } from 'mobx'
import { updateAllMatchesInSeason } from '../../../http/FootballApi'

const defaultFixtures = [
    {
        event_date: "2019-08-10T14:00:00+00:00",
        league: {
            name: "Premier League"
        },
        homeTeam: {
            team_name: "Crystal Palace",
            logo: "https://media.api-sports.io/football/teams/52.png"
        },
        goalsHomeTeam: 0,
        awayTeam: {
            team_name: "Everton",
            logo: "https://media.api-sports.io/football/teams/45.png"
        },
        goalsAwayTeam: 0,
    }
]

class FixturesStore { 
    @observable fixtures = []
    @observable initCardPosition = 0
    
    @action.bound updateFixtures() {
        this.fixtures = defaultFixtures
        // updateAllMatchesInSeason(fixtures => {
        //     fixtures == null || fixtures.length == 0?
        //         this.fixtures = null:
        //         this.initCardPosition = fixtures.filter(match => {
        //                 return match.status == "Match Postponed"
        //             }).length
        //         this.fixtures = fixtures.reverse()
        // })    
    }
}

export const fixturesStore = new FixturesStore()
const FixturesContext = React.createContext(fixturesStore)
export default FixturesContext