import React, { Component, useState } from 'react';
import { CSVLink } from 'react-csv';

class TeamCSV extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.csvLinkE1 = React.createRef();
        this.headers = [
            {label: 'ID', key: 'id'},
            {label: 'Team Name', key: 'name'},
            {label: 'Team Venue', key: 'venue.name'},
            {label: 'Games Played', key: 'teamStats[0].splits[0].stat.gamesPlayed'},
            {label: 'Wins', key: 'teamStats[0].splits[0].stat.wins'},
            {label: 'Losses', key: 'teamStats[0].splits[0].stat.losses'},
            {label: 'Points', key: 'teamStats[0].splits[0].stat.pts'},
            {label: 'Goals Per Game', key: 'teamStats[0].splits[0].stat.goalsPerGame'}
        ]
    }

    getTeamList = (id) => {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams/1?expand=team.stats`)
        .then((r) => r.json())
    }

    downloadReport = async () => {
        const data = await this.getTeamList();
        this.setState({ data: data.teams }, () => {
            setTimeout(() => {
                this.csvLinkE1.current.link.click();
            });
        });
    }

    handleIdChange = (e) => {
        console.log(e.target.value)
    }

    handleSeasonChange = (e) => {
        console.log(e.target.value)
    }


    render() {
        const { data } = this.state

        return (
            <div style={{ textAlign: 'center' }}>
                <form className='csvForm'>
                    <h2>Team Pipeline</h2>
                    <input 
                        placeholder='Enter Team ID' 
                        onChange={this.handleIdChange}
                        value={data.id}
                    />
                    <br></br>
                    <input placeholder='Enter Season Year' onChange={this.handleSeasonChange}></input>
                    <br></br>
                    <input
                        type='button'
                        value = 'Export Team to CSV'
                        onClick ={this.downloadReport}
                        style={{ cursor: 'pointer' }}
                    />
                    <CSVLink
                        headers={this.headers}
                        data={data}
                        filename='TeamData.csv'
                        ref={this.csvLinkE1}
                    />
                </form>
            </div>
        )
    }
}

export default TeamCSV;