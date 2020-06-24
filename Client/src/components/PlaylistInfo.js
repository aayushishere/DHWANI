import React from "react";

const PlaylistInfo = ({ playlistname, author, id }) => {
  return (
    <div className="playlistpage">
      <img
        className="albumart"
        alt="Playlist Cover"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Into_the_Spider-Verse_Cover.jpg/220px-Into_the_Spider-Verse_Cover.jpg"
      />
      <div className="conta">
        <h2 className="playlist1">Playlist</h2>
        <h1 className="playlistname">{playlistname}</h1>
        <h3 className="created">Created by</h3>
        <h3 className="author">{author}</h3>
      </div>
    </div>
  );
};

export default PlaylistInfo;
