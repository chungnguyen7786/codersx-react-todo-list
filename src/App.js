import React, {Component} from 'react'
import './App.css'
import AwesomeImage from './components/AwesomeImage/AwesomeImage'
// import HoverOpacity from './components/AwesomeImage/HoverOpacity'
import WithHoverOpacity from './components/AwesomeImage/WithHoverOpacity'

const HoverOpacityAwesomeImage = WithHoverOpacity (AwesomeImage, 0.8)
class App extends Component { 
  render() { 
    return ( 
      <div>
        <HoverOpacityAwesomeImage src="https://picsum.photos/300/200"/>
      </div>  
    );
  }
}

export default App;
 