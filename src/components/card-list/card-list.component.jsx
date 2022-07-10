import Card from "../card/card.component";
import "./card-list.styles.css";

// Functional Components accepts only 2 arguments.
// props and forwardRef
// props is always the first argument.
// e.g  const CardList = (props, forwardRef) => {}
// And for this reason, we can destructure our props in the arguments of CardList
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

// "export" allows other files to import the component
export default CardList;
