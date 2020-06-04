import React from 'react';
import { observable, action } from 'mobx'
import { DimHeight, DimWidth } from '../../../components/Layout';
import { updateAllMatchesInSeason, getEvents } from '../../../http/FootballApi'

const defaultEvent = [
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 25,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6126,
        "player": "F. Andrada",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal",
        "comments": null
    },
    {
        "elapsed": 44,
        "elapsed_plus": null,
        "team_id": 463,
        "teamName": "Aldosivi",
        "player_id": 6262,
        "player": "E. Iniguez",
        "assist_id": null,
        "assist": null,
        "type": "Card",
        "detail": "Yellow Card",
        "comments": null
    },
    {
        "elapsed": 46,
        "elapsed_plus": null,
        "team_id": 442,
        "teamName": "Defensa Y Justicia",
        "player_id": 5947,
        "player": "B. Merlini",
        "assist_id": 35695,
        "assist": "D. Rodriguez",
        "type": "subst",
        "detail": "D. Rodriguez",
        "comments": null
    }
]

const defaultFixtures = [
    {
        event_date: "2019-08-10T14:00:00+00:00",
        venue: "Old Trafford (Manchester)",
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
        venue: "Old Trafford (Manchester)",
        league: {
            name: "Premier League"
        },
        homeTeam: {
            team_name: "Crystal Palace Crystal Palace",
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
        venue: "Old Trafford (Manchester)",
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
    height: { value: DimHeight * 0.158, delay: 0 },
    width: { value: DimWidth * 0.54, delay: 0 }, 
    summaryFade: { value: 1, delay: 100 },
    detailFade: { value: 0, delay: 0, duration: 100 },
    marginX: DimWidth * 0.02,
    pop: false,
}
const cardPopUp = {
    height: { value: DimHeight * 0.93, delay: 500 },
    width: { value: DimWidth, delay: 500 },
    summaryFade: { value: 0, delay: 100 },
    detailFade: { value: 1, delay: 650, duration: 500 },
    marginX: 0,
    pop: true
}

class FixturesStore {
    @observable fixtures = []
    @observable initCardPosition = 0
    @observable fixtureCardStatus = []
    @observable events = []
    @observable labelStatus = standard
    
    @action.bound updateFixtures() {
        this.fixtures = defaultFixtures
        this.fixtureCardStatus =
            Array(this.fixtures.length).fill(cardStandard)
        // updateAllMatchesInSeason()
        //     .then(fixtures => {
        //         fixtures == null || fixtures.length == 0?
        //             this.fixtures = null:
        //             this.fixtureCardStatus =
        //                 Array(fixtures.length).fill(cardStandard)
        //             this.initCardPosition = fixtures.filter(match => {
        //                     return match.status == "Match Postponed"
        //                 }).length
        //             this.fixtures = fixtures.reverse()
        //     })
    }

    @action.bound popUpFixture(position) {
        this.fixtureCardStatus[position] =
            this.fixtureCardStatus[position].pop? cardStandard: cardPopUp
        this.labelStatus =
            this.labelStatus.pop? standard: popUp
        this.initCardPosition = position
        if (this.labelStatus.pop) {
            this.events = defaultEvent
            // let fixtureId = this.fixtures[position].fixture_id
            // getEvents(fixtureId)
            //     .then(events => this.events = events)
        }
    }

    @action.bound popDownFixture() {
        this.fixtureCardStatus.fill(cardStandard)
        this.labelStatus = standard
    }
}

export const fixturesStore = new FixturesStore()
const FixturesContext = React.createContext(fixturesStore)
export default FixturesContext