import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import "./App.css";
import Categories from "./Components/Categories";
import Search from "./Components/Search";
import SearchBar from "./Components/SearchBar"
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      searchInput: '',
      redirect: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=funding_category&$" +
          "group=funding_category"
      )
      .then(response => {
        let categoriesArr = [];
        response.data.forEach(elem => {
          return categoriesArr.push(elem.funding_category);
        });
        this.setState({ categories: categoriesArr });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange = e => {
    this.setState({
      searchInput: e.target.value,
      redirect: false
    });
  };
  handleSubmit = () => {
    const { searchInput } = this.state;
    this.setState({
      redirect: true
    });
    // return <Redirect to={`/search/${searchInput}`} />;
  };

  render() {
    const { categories, searchInput, redirect } = this.state;
    console.log("redirect", redirect);
    console.log("state", this.state);
    return (
      <div className="App">
        <div className="header">
          <Link to={`/`}>
            <img
              src="https://files.slack.com/files-pri/T9J0HJJ2E-F9J8BD30D/download/logo-b-dark.svg"
              alt="TranspNYC"
            />
          </Link>
          <SearchBar />
          <div className="headerSpace">
            <Link to='/representatives'>Contact Reps</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
        <div className="App-container">
          <nav id="navBar">
            {categories.map((elem, index) => (
              <Link to={`/category/${elem}`}>
                {/* <span id="NavLinks"> */}
                  {elem.replace("*", "")}
                {/* </span> */}
              </Link>
            ))}
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/representatives' component={Contact} />
            <Route path="/category/:category" component={Categories} />
            <Route path="/search/:search" component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
