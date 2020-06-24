import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import "../stylesheet/rating.css";
import "../stylesheet/reviews.css";
import StarRatingComponent from "react-star-rating-component";

const SongPage = () => {
  const [song, setSong] = useState({ review: [{}] });
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  const handleClick = (next, prev) => {
    setRating(next);
  };
  const handleSubmit = () => {
    console.log(review);
  };

  useEffect(() => {
    const demo = {
      songname: "Shape of You",
      artistname: "Ed Sheeran",
      avgrating: "4.5",
      songlyrics:
        "The club isn't the best place to find a lover So the bar is where I go Me and my friends at the table doing shots Drinking fast and then we talk slow Come over and start up a conversation with just me And trust me I'll give it a chance now Take my hand, stop, put Van the Man on the jukebox And then we start to dance, and now I'm singing like Girl, you know I want your love Your love was handmade for somebody like me Come on now, follow my lead I may be crazy, don't mind me Say, boy, let's not talk too much Grab on my waist and put that body on me Come on now, follow my lead Come, come on now, follow my lead I'm in love with the shape of you We push and pull like a magnet do Although my heart is falling too I'm in love with your body And last night you were in…",
      genre: "pop",
      mood: "chill",
      image: "https://miro.medium.com/max/2560/1*bqNsZ6GB2aMsZE20m8tcJw.jpeg",
      rating: 9,
      review: [
        {
          name: "Aayush",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          text: "This is nice Song",
          date: "14 Jan,20"
        },
        {
          name: "Aakarsh",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          text: "This is nice Song",
          date: "14 Jan,20"
        },
        {
          name: "Bro",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          text: "This is nice Song",
          date: "14 Jan,20"
        }
      ]
    };

    setSong(demo);
  }, []);

  useEffect(() => {
    setRating(song.rating);
  }, []);

  const renderReview = song.review.map(review => (
    <Reviews
      username={review.name}
      review={review.text}
      date={review.date}
      image={review.image}
    />
  ));

  return (
    <div className="songpage">
      <div className="container1">
        <img alt="Song Cover" src={song.image} />
        <div className="info">
          <div className="block head">
            {/* <h2 className="item1">Song</h2> */}
            <h1 className="item2">{song.songname}</h1>
          </div>
          <div className="block">
            <h3 className="item1">By</h3>
            <h3 className="item2">{song.artistname}</h3>
          </div>
          <div className="block">
            <h3 className="item1">Ratings</h3>
            <h3 className="item2">{song.avgrating}/10</h3>
          </div>
          <div className="block">
            <h3 className="item1">Genre</h3>
            <h3 className="item2">{song.genre}</h3>
          </div>
          <div className="block">
            <h3 className="item1">Mood</h3>
            <h3 className="item2">{song.mood}</h3>
          </div>
          <button className="addPlaylist">Add to Playlist</button>
        </div>
      </div>
      <div className="container2">
        <div className="lyrics">
          <h2>Lyrics</h2>
          <div>
            <p>{song.songlyrics}</p>
          </div>
        </div>
        <div className="reviewsTab">
          <h2>Reviews</h2>
          <div className="reviewscroll">{renderReview}</div>
          <div className="rateTab">
            <h2>Rate and Review</h2>
            <StarRatingComponent
              name="rating"
              value={rating}
              starCount={10}
              onStarClick={handleClick}
            />
            <textarea
              placeholder="Add Review"
              onChange={e => setReview(e.target.value)}
            />
            <button className="addReview" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPage;
