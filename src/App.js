import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import TopMenu from './components/TopMenu/TopMenu'
import Products from './components/Pages/Products'
const Home = () => {
  return <h2>Home</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

class App extends Component { 
  render() { 
    return ( 
      <Router>
        <div>
          <TopMenu />    
          <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/products" component = {Products} />
            <Route path="/users" component = {Users} />
          </Switch>
        </div>
      </Router>  
    );
  }  
}

export default App;
