import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Categories from "./Components/Categories";
import Search from "./Components/Search";
import SearchBar from "./Components/SearchBar"
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      searchInput: "",
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
          <div className="headerSpace" />
        </div>
        <nav id="navBar">
          {categories.map((elem, index) => (
            <span key={index} className="NavLinks">
              <Link to={`/category/${elem}`}>{elem}</Link>
            </span>
          ))}
        </nav>
        <Switch>
          <Route path="/category/:category" component={Categories} />
          <Route path="/search/:search" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
