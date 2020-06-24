import React, { useState, createContext } from "react";

export const SongContext = createContext();

export const SongProvider = props => {
  const [text, setText] = useState("");
  const [type, setType] = useState("Song");

  return (
    <SongContext.Provider
      value={{ songText: [text, setText], songType: [type, setType] }}
    >
      {props.children}
    </SongContext.Provider>
  );
};
