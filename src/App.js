import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  // class components are necessary for lifecylce and state
  // use functional components if you are just trying to render some html
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // state is used for user interactions
    // state will then be passed down as props to its children
    
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }


  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }
   render() {
    const { monsters, searchField } = this.state;
    // destructuring of this.state.monsters and this.state.searchField
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      // lowercase so that it doesn't filter based off different caps
      // filtered monsters is an array which is filtered by the searchField state
      
    );
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      {/* filteredMonsters is then passed down as props */}
      </div>
    );
  }
}
export default App;
