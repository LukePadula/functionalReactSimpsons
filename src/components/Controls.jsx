import React from "react";

const Controls = (props) => {
  console.log(props);
  const { onSearchInput, onSort, onReset, sortDirection, sortBy, searchInput } =
    props;
  return (
    <div id="controls-input">
      <input value={searchInput} onChange={onSearchInput}></input>
      <select value={sortDirection} onChange={onSort} id="sort-direction">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
      <select value={sortBy} onChange={onSort} id="sort-by">
        <option value="quote">Quote</option>
        <option value="character">Character name</option>
      </select>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
