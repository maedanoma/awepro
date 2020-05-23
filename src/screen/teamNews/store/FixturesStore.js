import React from 'react';
import { observable, action } from 'mobx'
import { DimHeight, DimWidth } from '../../../components/Layout';
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
    },
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
    ,
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

const standard = {
    x: {        value: 0,                   delay: 300 },
    y: {        value: 0,                   delay: 200 },
    scrollEnabled: true,
    pop: false,
}
const popUp = {
    x: {        value: DimWidth,            delay: 0 },
    y: {        value: -(DimHeight * 0.035),delay: 100 },
    scrollEnabled: false,
    pop: true
}

const cardStandard = {
    height: {   value: DimHeight * 0.155,   delay: 0 },
    width: {    value: DimWidth * 0.54,     delay: 0 },
    pop: false,
}
const cardPopUp = {
    height: {   value: DimHeight * 0.9,     delay: 500 },
    width: {    value: DimWidth * 0.96,     delay: 500 },
    pop: true
}

class FixturesStore {
    @observable fixtures = []
    @observable initCardPosition = 0
    @observable fixtureCardStatus = []
    @observable labelStatus = standard
    
    @action.bound updateFixtures() {
        this.fixtures = defaultFixtures
        this.fixtureCardStatus =
            Array(this.fixtures.length).fill(cardStandard)
        // updateAllMatchesInSeason(fixtures => {
        //     fixtures == null || fixtures.length == 0?
        //         this.fixtures = null:
        //         this.initCardPosition = fixtures.filter(match => {
        //                 return match.status == "Match Postponed"
        //             }).length
        //         this.fixtures = fixtures.reverse()
        // })    
    }
    @action.bound popUpFixture(position) {
        this.fixtureCardStatus[position] =
            this.fixtureCardStatus[position].pop? cardStandard: cardPopUp
        this.labelStatus =
            this.labelStatus.pop? standard: popUp
        this.initCardPosition = position
    }

    @action.bound popDownFixture() {
        this.fixtureCardStatus.fill(cardStandard)
        this.labelStatus = standard
    }
}

export const fixturesStore = new FixturesStore()
const FixturesContext = React.createContext(fixturesStore)
export default FixturesContext