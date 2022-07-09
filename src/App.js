import { useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

// functional component
// re-renders whenever the objects and values of the useState() hook change
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  console.log(searchField);

  console.log("render");

  // this part of the function continously gets triggered and called everytime seMonsters()
  // is getting called.
  // And for this reason, we will optimize the code by the hook called useEffect()
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"></SearchBox>
      {/*<CardList monsters={filteredMonsters}></CardList> */}
    </div>
  );
};

export default App;
