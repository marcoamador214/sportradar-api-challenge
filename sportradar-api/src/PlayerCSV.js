import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

class PlayerCSV extends Component {

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
        return fetch('https://statsapi.web.nhl.com/api/v1/people/8475151')
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

    render() {
        const { data } = this.state

        return (
            <div style={{ textAlign: 'center' }}>
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
            </div>
        )
    }
}

export default PlayerCSV;