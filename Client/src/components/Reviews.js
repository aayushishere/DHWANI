import React from "react";

const Reviews = ({ username, review, date, image }) => {
  return (
    <div className="reviews">
      <div className="reviewpic">
        <img alt="Profile Pic" src={image} />
      </div>
      <div className="reviewSection">
        <div className="head">
          <h3 className="name">{username}</h3>
          <h5 className="date">{date}</h5>
        </div>
        <div className="content">
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
