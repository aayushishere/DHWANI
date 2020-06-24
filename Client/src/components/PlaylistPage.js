import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlaylistInfo from "./PlaylistInfo";
import ListHead from "./ListHead";
import ListItems from "./ListItems";
import "../stylesheet/playlistinfo.css";
import "../stylesheet/listitems.css";
const PlaylistPage = ({ id }) => {
  const [playlist, setPlaylist] = useState({
    name: "",
    createdby: "",
    image: "",
    song: [{}]
  });

  useEffect(() => {
    setPlaylist({
      name: "SpiderMan",
      createdBy: "Aayush",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Into_the_Spider-Verse_Cover.jpg/220px-Into_the_Spider-Verse_Cover.jpg",
      song: [
        {
          artist: ["Post Malone"],
          name: "Sunflower",
          id: "123148198173",
          duration: "4:00",
          mood: "Chill",
          genre: "pop"
        },
        {
          artist: ["Ed Sheeran"],
          name: "Shape of You",
          id: "123148198173",
          duration: "4:00",
          mood: "Chill",
          genre: "pop"
        },
        {
          artist: ["Camila Camilo"],
          name: "Senorita",
          id: "123148198173",
          duration: "4:00",
          mood: "Chill",
          genre: "pop"
        },
        {
          artist: ["Post Malone"],
          name: "Sunflower",
          id: "123148198173",
          duration: "4:00",
          mood: "Chill",
          genre: "pop"
        }
      ]
    });
  }, []);

  const renderSong = playlist.song.map(song => {
    return (
      <Link to={`/song/${song.id}`}>
        <ListItems
          artist={song.artist}
          name={song.name}
          duration={song.duration}
          mood={song.mood}
          genre={song.genre}
        />
      </Link>
    );
  });

  return (
    <div className="playlistcont">
      <PlaylistInfo playlistname={playlist.name} author={playlist.createdBy} />
      <ListHead />
      {renderSong}
    </div>
  );
};


export default PlaylistPage;
