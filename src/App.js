import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ['Go to market', 'Buy food', 'Make dinner'];
  return (
    <ul>
      Todos list:
      {todos.map(x => <li>{x}</li>)}      
    </ul>
  );
}

export default App;
