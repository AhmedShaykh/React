import './App.css';
import AxiosAPI from './Components/AxiosAPI';
import UseRef from './Components/UseRef';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React UseRef & Axios
        </h1>
        <UseRef />
        <AxiosAPI />
      </header>
    </div>
  );
}

export default App;