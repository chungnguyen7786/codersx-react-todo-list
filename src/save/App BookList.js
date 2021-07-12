import React, {Component} from 'react';
import BookList from "./components/BookList/BookList.js";
import './App.css';


class App extends Component { 
  render() { 
    return ( 
      <div className="App">
      <BookList />
    </div>   
    );      
  }  
}

export default App;
