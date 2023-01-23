import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

class PlayerCSV extends Component {

    idRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.csvLinkE1 = React.createRef();
        this.headers = [
            {label: 'ID', key: 'id'},
            {label: 'Name', key: 'fullName'},
            {label: 'Current Team', key: 'currentTeam.name'},
            {label: 'Player Age', key: 'currentAge'},
            {label: 'Number', key: 'primaryNumber'},
            {label: 'Position', key: 'primaryPosition.name'},
            {label: 'Rookie', key: 'rookie'}
        ]
    }

    getPlayerList = () => {
        return fetch(`https://statsapi.web.nhl.com/api/v1/people/${this.idRef.current.value}`)
        .then((r) => r.json())
    }

    downloadReport = async () => {
        const data = await this.getPlayerList();
        this.setState({ data: data.people }, () => {
            setTimeout(() => {
                this.csvLinkE1.current.link.click();
            });
        });
    }

    handleChange = (e) => {
        console.log(e.target.value)
    }

    render() {
        const { data } = this.state

        return (
            <div style={{ textAlign: 'center' }}>
                <form className='csvForm'>
                    <h2>Player Pipeline</h2>
                    <input 
                        placeholder='Enter Player ID' 
                        onChange={this.handleChange}
                        type='number'
                        ref={this.idRef}
                    />
                    <br></br>
                    <input placeholder='Enter Season Year'></input>
                    <br></br>
                    <input
                        type='button'
                        value = 'Export Player to CSV'
                        onClick ={this.downloadReport}
                        style={{ cursor: 'pointer' }}
                    />
                    <CSVLink
                        headers={this.headers}
                        data={data}
                        filename='PlayerData.csv'
                        ref={this.csvLinkE1}
                    />
                </form>
            </div>
        )
    }
}

export default PlayerCSV;