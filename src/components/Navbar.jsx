import React, { useState, useEffect } from "react";

function Navbar({ handleSearchSubmit, suggestionList }) {
  const [letter, setLetter] = useState("");

  const handleLoad = (e) => {
    setLetter(e.target.value);
    handleSearchSubmit(letter);
  };

  // const handleSubmit = () => {
  //   handleSearchSubmit(letter);
  // };

  let listAll = null;
  if (suggestionList) {
    suggestionList.map((hero) => (
      <option id="suggestionsList" value={hero.name} />
    ));
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Hero-Hub</a>
          <form onSubmit={handleLoad} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={letter}
              onChange={handleLoad}
              list="suggestionsList"
            />
            <datalist id="suggestionsList">{listAll}</datalist>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
