import React, {Component} from 'react';
import './App.css';

import Todos from './components/Todos/Todos.js';
import checkAll from"./components/img/check-all.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        {title: 'Clean house', isComplete: true},
        {title: 'Clean house', isComplete: false},
        {title: 'Clean house', isComplete: true}
      ]
    } 
    this.onKeyUp = this.onKeyUp.bind(this);  
    this.onChange = this.onChange.bind(this); 
  }  

  onItemClicked(item) {    
    return () => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { ...item, isComplete:!isComplete },
          ...todoItems.slice(index + 1)
        ]
      });
    }    
  }

  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) { //enter key
      if(!text || text === '') {
        return;
      }
  
      text = text.trim();
      if (!text) {
        return;
      }
       
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems
        ] 
      })
    } 
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {    
    const { todoItems, newItem } = this.state;
    return ( 
      <div className='App'> 
        <div className='Header'>
          <img src={checkAll} width={24}/>
          <input 
            type="text" 
            placeholder="Add a new item"
            value = {newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp} 
          />
        </div>
        {todoItems.length > 0 && todoItems.map(  
          (item, index) => <Todos 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)}/>
        )}
        {todoItems.length === 0 && <h1>All Done!</h1>
        }
      </div>
    
    )      
  }  
}

export default App;
