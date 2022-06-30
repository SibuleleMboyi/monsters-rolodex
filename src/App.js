import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
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
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      // same as
      // return {searchField : searchField}
      return { searchField };
    });
  };

  render() {
    console.log("render");

    // Destructuring Optimization
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this; // or this.onSearchChange

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}></input>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}

        <CardList></CardList>
      </div>
    );
  }
}

export default App;
