import { Component } from "react";

class SearchBox extends Component {
  render() {
    //const { onChangeHandler } = this.props.onChangeHandler;

    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}></input>
    );
  }
}

export default SearchBox;
