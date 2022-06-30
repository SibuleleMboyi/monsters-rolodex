import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // Annonymous functions get created and destroyed after each and every run
  // for this reason, we extracted the annonymous function from the "onChange" handler to here.
  // This increases optimization as the same function won't get recreated in every run.
  onSearchChange = (event) => {
    console.log(event);
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      // same as
      // return {searchField : searchField}
      return { searchField };
    });
  };

  render() {
    console.log("render1");
    // Destructuring Optimization
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this; // or this.onSearchChange

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
