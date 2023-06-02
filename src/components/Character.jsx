import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

const Character = (props) => {
  const { character, quote, image, id, liked } = props.item;

  return (
    <div className="characterContainer">
      <Name
        character={character}
        onLikeToggle={props.onLikeToggle}
        id={id}
        liked={liked}
      />
      <Quote quote={quote} />
      <Image image={image} />
      <Delete
        quote={quote}
        character={character}
        onDelete={props.onDelete}
        id={props.id}
      />
    </div>
  );
};

export default Character;
