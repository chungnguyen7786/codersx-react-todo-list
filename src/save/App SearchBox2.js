import React, {Component} from 'react';
import './App.css';

import SearchBox2 from './components/SearchBox2/SearchBox2.js';

class App extends Component {  
  constructor() {
    super();
    this.state = {isFocused: false, value: ""};
    this.inputTextRef = React.createRef();
  }

  handleInputFocus = (event) => {
    this.setState({
      isFocused: !this.state.isFocused
    });
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { isFocused, value } = this.state;
    return (
      <div className="App">
        <SearchBox2 
          isFocused={isFocused}
          value = {value} 
          handleInputFocus={this.handleInputFocus}
          handleChange={this.handleChange}
          rer={this.inputTextRef}
        />
      </div>    
    ); 
  }  
}

export default App;
