function Charactercard({ name, description, image }) {
  const { path, extension } = image;
  const imageUrl = `${path}.${extension}`;
  return (
    <>
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-text">{name}</h1>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charactercard;
