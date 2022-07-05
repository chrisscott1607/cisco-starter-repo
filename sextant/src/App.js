import logo from './logo.svg';
import './App.css';
import Banner from 'react-js-banner';

function App() {
  return (
    <div className="App">
      
      <img src={logo} className="App-logo" alt="logo" />
      
      <Banner
        title='Your Banner'
      ></Banner>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
      
    </div>
  );
}

export default App;
