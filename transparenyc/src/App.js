import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Transparency from './Components/Transparency';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Transparency} />
      </div>
    )
  }
}
export default App;
