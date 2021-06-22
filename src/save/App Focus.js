import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();     
  }
  

  componentDidMount() {
    setTimeout(() => this.inputElement.current.focus(), 2000);
  }


  render() {    
    return ( 
      <div className='App'> 
        <input type='text' ref={this.inputElement} />
      </div>    
    );      
  }  
}

export default App;
