import TeamCSV from './TeamCSV';
import PlayerCSV from './PlayerCSV';

function App() {

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>NHL ETL Pipeline</h1>
      <TeamCSV/>
      <br></br>
      <PlayerCSV/>
    </div>
  );
}

export default App;
