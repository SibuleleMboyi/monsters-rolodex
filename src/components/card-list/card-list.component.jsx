import { Component } from "react";
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
          // Destructuring Optization
          const { name, email, id } = monster;

          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2$size=180*180`}></img>
              <h2> {name}</h2>
              <p> {email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// "export" allows other files to import the component
export default CardList;
