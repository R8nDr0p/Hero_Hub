function Charactercard({ name, description, image }) {
  // const { path, extension } = image;
  // const imageUrl = `${path}.${extension}`;
  const { combat, durability, intelligence, power, speed, strength } =
    description;

  return (
    <>
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-text">{name}</h1>
            <p className="card-text">Combat: {combat}</p>
            <p className="card-text">Durability: {durability}</p>
            <p className="card-text">Intelligence: {intelligence}</p>
            <p className="card-text">Power: {power}</p>
            <p className="card-text">Speed: {speed}</p>
            <p className="card-text">Strength: {strength}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charactercard;
