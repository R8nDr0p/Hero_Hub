import Characterlist from "./components/Characterlist";
import Navbar from "./components/Navbar";
// import Index from "./components";
import React, { useState, useEffect } from "react";
import Charactercard from "./components/Charactercard";

function App() {
  const [heroarr, setHeroarr] = useState([]);
  // const handleSubmit = async (searchHero) => {
  //   fetch(
  //     `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider-man&ts=1&apikey=28d1734eee27b04819f015a90d39e45e&hash=8e43e9b8786ade83ad56396cfa7eb337`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // console.log(result.data.results[0]);
  //       // console.log(result.data.results);
  //       setHeroarr(result.data.results);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  const handleSubmit = async (searchHero) => {
    try {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchHero}&ts=1&apikey=28d1734eee27b04819f015a90d39e45e&hash=8e43e9b8786ade83ad56396cfa7eb337`
      );
      const result = await response.json();
      if (result.data && result.data.results) {
        setHeroarr(result.data.results);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    console.log(heroarr);
  }, [heroarr]);

  // const characterArr = heroarr.map((hero, index) => (
  //   <Charactercard
  //     name={hero.name}
  //     description={hero.description}
  //     image={hero.thumbnail}
  //   />
  // ));

  let characterArr = null;
  if (heroarr) {
    characterArr = heroarr.map((hero, index) => (
      <Charactercard
        key={hero.id}
        name={hero.name}
        description={hero.description}
        image={hero.thumbnail}
      />
    ));
  }

  return (
    <>
      <Navbar handleSearchSubmit={handleSubmit} />
      {/* <Charactercard
        name={heroarr[1].name}
        description={heroarr[1].description}
        image={heroarr[1].thumbnail}
      /> */}
      <div className="container">
        <div className="row row-cols-3-lg">{characterArr}</div>
      </div>
    </>
  );
}

export default App;
