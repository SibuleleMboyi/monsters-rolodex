import "./search-box.styles.css";
const SearchBox = ({ classNames, placeholder, onChangeHandler }) => (
  <input
    className={`search-box + ${classNames}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}></input>
);

export default SearchBox;
