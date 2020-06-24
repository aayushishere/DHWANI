import React from "react";
import { Link } from "react-router-dom";

const Playlist = ({ playlist }) => {
  const renderPlaylist = playlist.map(playlist => {
    return (
      <>
        <Link to={`/playlist/${playlist.id}`}>
          <div className="item" key={playlist.id}>
            <img src={playlist.img} alt="img" />
            <div className="name">{playlist.name}</div>
          </div>
        </Link>
      </>
    );
  });

  return (
    <>
      <div className="heading">Playlist</div>
      <div className="playlist">{renderPlaylist}</div>
    </>
  );
};

export default Playlist;
