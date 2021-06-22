import React, {Component} from 'react';
import Counter from './components/Counter/Counter.js';
import './App.css';


class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      showCounter: true
    };
  }

  componentDidUpdate() {
    console.log('App update');
  }

  removeCounter = () => {
    this.setState({
      showCounter: false
    });
  }

  render() { 
    console.log('App render');   
    return ( 
      <div className='App'> 
        <button onClick={this.removeCounter}>
          Remove counter
        </button>
        {this.state.showCounter && <Counter/>}
      </div>    
    );      
  }  
}

export default App;
