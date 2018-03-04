import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Search from './Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/search">Search</Link>
        </nav>
        <Switch>
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
