import React, {Component} from 'react';
import './App.css';

import Accordion from './components/Accordion/Accordion.js';

class App extends Component {
  render() {    
    return ( 
      <div className='App'> 
        <Accordion heading="Heading">
          <h2>Hello world!</h2>
        </Accordion>
      </div>    
    )      
  }  
}


export default App;