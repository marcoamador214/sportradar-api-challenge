import { CSVLink } from 'react-csv';
import TeamCSV from './TeamCSV';
import PlayerCSV from './PlayerCSV';

function App() {

  return (
    <div className="App">
      <TeamCSV/>
      <br></br>
      <PlayerCSV/>
    </div>
  );
}

export default App;
