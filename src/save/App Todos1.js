import './App.css';
import logo from './logo.svg'
import TodoItem from '../components/Todos/Todos';

function App() {
  const todos = ['Go to market', 'Buy food', 'Make dinner'];
  return (
    <div className="App">
      <img className="App-logo" src={logo}/>
      <ul>
      Todos list:
      {todos.map(x => <li>{x}</li>)}      
      </ul>
      <TodoItem/>
    </div>    
  ); 
}

export default App;
