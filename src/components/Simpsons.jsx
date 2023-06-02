import React from "react";
import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons, onLikeToggle, onDelete, setLikedCount } = props;

  return (
    <>
      {simpsons.map((item) => {
        return (
          <Character
            setLikedCount={setLikedCount}
            onLikeToggle={onLikeToggle}
            onDelete={onDelete}
            item={item}
            key={item.quote + item.character}
            id={item.id}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
