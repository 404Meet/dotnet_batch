import './App.css';
import Records from './db.json';

function App() {
  return (
    <div className="App"> 
      {
        Records.map(records => {
          return(
            <div className='box' key={records.id}>
            <br></br>
            <image src={records.img} />
            ID: {records.id}<br></br>
            Name: {records.name}<br></br>
            Attack: {records.Attack}<br></br>
            HP: {records.HP}<br></br>
            CP: {records.CP}<br></br>
            Defense: {records.Defense}<br></br>
            Legend: {records.Legend}<br></br>
            Type1 : {records.type1}<br></br>
            Type2: {records.type2}<br></br>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
