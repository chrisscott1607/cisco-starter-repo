import React, { Component } from 'react'
import Home from './HomeComponent'
import { DATA } from '../shared/data';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    };
  }
  
  render() {
    
    return (
      <div className='row'>
        <Home 
          points={this.state.data}
        />
      </div>
    )   
  }         
        
    
}

export default Main
