import React, { useState, useEffect } from "react";

function Navbar({ handleSearchSubmit }) {
  const [letter, setLetter] = useState("");

  const handleLoad = (e) => {
    const userInput = e.target.value;
    setLetter(userInput);
    if (userInput.trim() === "") {
      handleSearchSubmit("");
    }
    // handleSearchSubmit(letter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(letter);
  };

  useEffect(() => {
    if (letter.trim() !== "") {
      handleSearchSubmit(letter);
    }
    console.log(letter);
  }, [letter]);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Hero-Hub</a>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={letter}
              onChange={handleLoad}
            />
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
