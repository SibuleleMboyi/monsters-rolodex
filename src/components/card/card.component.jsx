import "./card.styles.css";

const Card = ({ monster: { name, email, id } }) => (
  <div className="card-container" key={id}>
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2$size=180*180`}></img>
    <h2> {name}</h2>
    <p> {email}</p>
  </div>
);

// You can destructure the code in this way as well.
// Comment the above code and uncomment the below code, for experiement

/* const Card = ({ monster }) => {

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
}; */

export default Card;
