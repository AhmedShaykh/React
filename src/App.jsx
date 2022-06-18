import './App.css';
import UseRef from './Components/UseRef';
import AxiosAPI from './Components/AxiosAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React UseRef & Axios API!
        </h1>
        <UseRef />
        <AxiosAPI />
      </header>
    </div>
  );
}

export default App;