import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
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
    console.log('MOUNTED')
    axios
      .get('https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=funding_category&$' +
        'group=funding_category')
      .then(response => {
        console.log(response.data)
        let categoriesArr = []
        response
          .data
          .forEach(elem => {
            return categoriesArr.push(elem.funding_category);
          })
        console.log("agencies Arr", categoriesArr)
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
        <div className="Header">
        <img src="https://files.slack.com/files-pri/T9J0HJJ2E-F9J8BD30D/download/logo-b-dark.svg" alt="TranspNYC logo" />
         </div>
          {agencies.map((elem) => {
            return <div>
              <Link to={`/category/${elem}`}>
                {elem}
              </Link>
            </div>
          
        })}

        {/* <Route exact path='/transparency' render={ this.renderUserList } /> */}

        <Route path='/category/:category' component={Categories}/>

      </div>
    );
  }
}

export default App;