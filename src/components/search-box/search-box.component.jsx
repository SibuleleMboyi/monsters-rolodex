import { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    //const { onChangeHandler } = this.props.onChangeHandler;

    return (
      <input
        className={`search-box + ${this.props.classNames}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}></input>
    );
  }
}

export default SearchBox;
