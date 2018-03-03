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
        <nav id="NavBar">
          {agencies.map((elem) => 
            <Link to={`/${elem}`}>
              {elem}
            </Link>
          )}
        </nav>

        {/* <Route exact path='/transparency' render={ this.renderUserList } /> */}

        <Route path='/:category' component={Categories}/>

      </div>
    );
  }
}

export default App;