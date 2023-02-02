/*import './App.css'
import Main from './components/MainComponent';



function App() {
  return (
    <div className="App">
      <Main />
    </div>
    
  )
}

export default App;
*/

import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="I'm an exhibit!"></Exhibit>
        <Exhibit name="I'm also an exhibit!"></Exhibit>
        <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
      </div>
    );
  }
}

export default App;

