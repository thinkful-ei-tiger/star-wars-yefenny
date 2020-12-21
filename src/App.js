import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ListCharacter from './ListCharacter/ListCharacter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characthers: [],
      filter: ''
    };
  }
  componentDidMount() {
    this.searchCharacther();
  }
  searchCharacther = () => {
    fetch(
      `https://swapi-thinkful.herokuapp.com/api/people/?search=${this.state.filter}`
    )
      .then((res) => res.json())
      .then((value) => {
        this.setState({
          characthers: value.results
        });
      });
    console.log(this.state.characthers);
  };
  changeFilter = (name) => {
    this.setState({
      filter: name
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1>Star Wars </h1>
        </header>
        <main>
          <SearchBar
            changeFilter={this.changeFilter}
            searchCharacther={this.searchCharacther}
          />
          <ListCharacter values={this.state.characthers} />
        </main>
      </div>
    );
  }
}

export default App;
