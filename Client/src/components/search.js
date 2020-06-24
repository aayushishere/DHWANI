import React, { useState, useContext } from "react";
import "../stylesheet/search.css";
import { KeyboardArrowDown } from "@material-ui/icons";
import { SongContext } from "../songContext";

const Search = ({ onsearch }) => {
  const typeClick = () => {
    const options = document.querySelector(".options");
    const svg = document.querySelector(".type svg");

    options.classList.toggle("active");
    svg.classList.toggle("active");
  };

  const { songText, songType } = useContext(SongContext);

  const [type, setType] = songType;
  const [text, setText] = songText;

  return (
    <div className="search">
      <div className="searchBox">
        <input
          placeholder="Search..."
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
        />
        <div className="optionBox">
          <div className="type" onClick={() => typeClick()}>
            <h3>{type}</h3>
            <KeyboardArrowDown />
          </div>
          <div className="options">
            <li onClick={e => setType("Song")}>Song</li>
            <li onClick={e => setType("Artist")}>Artist</li>
            <li onClick={e => setType("Mood")}>Mood</li>
            <li onClick={e => setType("Genre")}>Genre</li>
          </div>
        </div>
      </div>
      <button onClick={onsearch}>Search</button>
    </div>
  );
};

export default Search;
