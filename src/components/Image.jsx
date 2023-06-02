import React from "react";

const Image = (props) => {
  const { like, image, character } = props;

  return (
    <img className={like ? "liked" : "notLiked"} src={image} alt={character} />
  );
};

export default Image;
