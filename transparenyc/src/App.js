import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Categories from './Components/Categories';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      agencies: []
    }
  }
  
  componentDidMount() {
    axios
      .get('https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=funding_category&$' +
        'group=funding_category')
      .then(response => {
        console.log(response.data)
        let agenciesArr = []
        response
          .data
          .forEach(elem => {
            return agenciesArr.push(elem.funding_category);
          })
        console.log("agencies Arr", agenciesArr)
        this.setState({agencies: agenciesArr});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {agencies} = this.state;
    return (
      <div className="App">
        <div className="header">
        <Link to={`/`}>
          <img src="https://files.slack.com/files-pri/T9J0HJJ2E-F9J8BD30D/download/logo-b-dark.svg" alt="TranspNYC" />
        </Link>
        <input placeholder="search" className="searchBar" />
        <div className="headerSpace"></div>
        </div>
        <nav id="NavBar">
          {agencies.map((elem) => 
            <Link to={`/category/${elem}`}>
              <span className="NavLinks">
                {elem}
              </span>
            </Link>
          )}
        </nav>
        {/* <Route exact path='/transparency' render={ this.renderUserList } /> */}

        <Route path='/category/:category' component={Categories}/>

      </div>
    );
  }
}

export default App;