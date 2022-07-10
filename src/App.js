import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from ".//components/card-list/card-list.component";

// functional component
// re-renders whenever the objects and values of the useState() hook change
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log(searchField);

  console.log("render");

  // Side Effects, are parts of the code that are declared globaly outside the local scope
  // of the function but are also accessible in the local scope of this function.
  // Because fetch() function gets information outside this functional component, it is therefore a
  // Side Effect.

  // fetch() continously gets triggered and called everytime seMonsters() is getting called.
  // When setMonsters(users) is called, this functional component re-renders.
  // This becomes an infinite loop because whenever setMonsters(users) is called, the functional
  // component rebuilds.

  // And for this reason, we will optimize this functional component by the hook called useEffect()

  useEffect(
    () => {
      console.log("External API - Effect firing");
      // this is a callback function
      // it is called whenever the values in the 2nd argument change( usually useState() values)
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    },
    // a change of values in here trigger the callback function to execute
    []
  );

  useEffect(() =>{
    console.log("Filtering - Effect firing");
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])


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
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
