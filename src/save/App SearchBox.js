import React, {Component} from 'react';
import './App.css';

import SearchBox from './components/SearchBox/SearchBox.js';

class App extends Component {  
  constructor() {
    super();
    this.state = {isFocused: false};
    this.inputTextRef = React.createRef();
  }

  handleInputFocus = (even) => {
    this.setState ({
      isFocused: !this.state.isFocused
    });
  }

  render() {
    const { isFocused } = this.state;
    return (
      <div className="App">
        <SearchBox 
          isFocused={isFocused} 
          handleInputFocus={this.handleInputFocus}
        />
      </div>    
    ); 
  }  
}

export default App;
