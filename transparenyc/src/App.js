import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
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
  renderSomething = () => {
    console.log("got here")
    return (
      <div>Hey</div>
    )
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
            return agenciesArr.push(elem.funding_category)
          })
        console.log("agencies Arr", agenciesArr)
        this.setState({agencies: agenciesArr})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log("state:", this.state)
    const {agencies} = this.state
    return (
      <div className="App">
        <div className="Header">
        <img src="https://files.slack.com/files-pri/T9J0HJJ2E-F9J8BD30D/download/logo-b-dark.svg" alt="TranspNYC logo" />
         </div>
          {agencies.map((elem) => {
            return <div>
              <Link to={`/category/:${elem}`}>
                {elem}
              </Link>
              <div>$10,000,000</div>
            </div>
          
        })}
        {/* <Route exact path='/transparency' render={ this.renderUserList } /> */}
        <Route path='/category/:category' component={Categories}/> {/* <Route path='/doe' render={this.renderDoeInfo}/> */}
      </div>
    );
  }
}
export default App;
