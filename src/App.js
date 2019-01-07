import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import About from './Components/About';



import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <Router >
        <div > 
          <Route  path="/" component={ NavBar} />
          <Route exact path="/" component={ Main} />
          <Route exact path="/about" component = {About}/>
        </div>
      </Router>
    );
  }
}

export default App;
