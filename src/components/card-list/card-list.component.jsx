import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render2");
    // Destructuring Optimization
    const { monsters } = this.props;

    console.log(this.props);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

// "export" allows other files to import the component
export default CardList;
