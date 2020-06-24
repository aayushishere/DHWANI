import React, { useEffect, useState,useContext } from "react";
import Icon from "@material-ui/core/Icon";
import Playlist from "./Playlist";
import {TokenContext} from '../tokenContext'
const clickPlaylist = e => {
  const lightbox = document.querySelector(".lightbox");
  lightbox.classList.add("active");
};
const clickLightbox = e => {
  const lightbox = document.querySelector(".lightbox");

  if (e.target !== e.currentTarget) return;

  lightbox.classList.remove("active");
};

const Sidebar = () => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [token,setToken] = useContext(TokenContext)

  useEffect(() => {
    console.log(`Bearer ${token}`);
    fetch("/playlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.error) {
          return;
        }
        console.log(data);
        await setPlaylist(data)
        console.log("I M FETCHED"); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addPlaylist = () => {
    console.log(playlistName);
    fetch("/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
      body : JSON.stringify({
        name : playlistName
    })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("I M FETCHED"); 
      })
      .catch((err) => {
        console.log(err);
      });

    const lightbox = document.querySelector(".lightbox");
    lightbox.classList.remove("active");
  };

  return (
    <>
      <div className="lightbox" onClick={clickLightbox}>
        <div className="form">
          <input
            type="text"
            value={playlistName}
            onChange={e => setPlaylistName(e.target.value)}
            placeholder="Playlist Name..."
          />
          <button onClick={addPlaylist}>Add</button>
        </div>
      </div>
      <div className="sidebar">
        <div className="head" />
        <div className="content">
          <Playlist playlist={playlist} />
        </div>
        <div className="foot">
          <div className="add" onClick={clickPlaylist}>
            <h3>Add Playlist</h3>
            <Icon style={{ fontSize: 50, color: "white" }}>add_circle</Icon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
