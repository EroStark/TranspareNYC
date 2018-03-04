import React from 'react';
import { Route, Link } from 'react-router-dom';
import Categories from './Components/Categories';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }
  
  componentDidMount() {
    axios
      .get('https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=funding_category&$' +
        'group=funding_category')
      .then(response => {
        let categoriesArr = []
        response.data
          .forEach(elem => {
            return categoriesArr.push(elem.funding_category);
          })
        this.setState({categories: categoriesArr});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {categories} = this.state;
    return (
      <div className="App">
        <div className="header">
        <Link to={`/`}>
          <img src="https://files.slack.com/files-pri/T9J0HJJ2E-F9J8BD30D/download/logo-b-dark.svg" alt="TranspNYC" />
        </Link>
        <input placeholder="search" className="searchBar" />
        <div className="headerSpace"></div>
        </div>
        <nav id="navBar">
          {categories.map((elem) => 
            <span className="NavLinks">
            <Link to={`/category/${elem}`}>
                {elem}
            </Link>
            </span>
          )}
        </nav>
        {/* <Route exact path='/transparency' render={ this.renderUserList } /> */}
        {/* <div className="Header">
        <img src="https://files.slack.com/files-pri/T9J0HJJ2E-F9J8BD30D/download/logo-b-dark.svg" alt="TranspNYC logo" />
         </div>
         <nav id="navBar">
          {categories.map((elem) =>
            <Link to={`/category/${elem}`}>
              {elem}
            </Link>
          )}
          </nav> */}

        <Route path='/category/:category' component={Categories}/>

      </div>
    );
  }
}

export default App;