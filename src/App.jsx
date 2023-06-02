import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    simpsons: undefined,
    sortDirection: "asc",
    sortBy: "quote",
    searchInput: "",
  });

  const onLikeToggle = (id) => {
    const indexOf = state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...state.simpsons];
    simpsons[indexOf].liked = !simpsons[indexOf].liked;
    setState({ ...state, simpsons });
  };

  const onDelete = (id) => {
    const indexOf = state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...state.simpsons];
    simpsons.splice(indexOf, 1);
    setState({ simpsons });
  };

  const onSearchInput = (e) => {
    setState({ ...state, searchInput: e.target.value });
  };

  const onReset = () => {
    setState({
      ...state,
      sortDirection: "asc",
      sortBy: "quote",
      searchInput: "",
    });
  };

  const onSort = (e) => {
    console.log(e);
    if (e.target.id === "sort-by") {
      setState({ ...state, sortBy: e.target.value });
    } else {
      setState({ ...state, sortDirection: e.target.value });
    }
    console.log(e);
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
      );
      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      setState({ ...state, simpsons: data });
      console.log(state);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!state.simpsons) return <Loading />;
  let simpsonsResults = state.simpsons;

  if (state.searchInput) {
    simpsonsResults = state.simpsons.filter((item) => {
      if (
        item.quote.toLowerCase().includes(state.searchInput.toLowerCase()) ||
        item.character.toLowerCase().includes(state.searchInput.toLowerCase())
      )
        return item;
    });
  }

  simpsonsResults.sort((a, b) => {
    if (a[state.sortBy] < b[state.ortBy]) {
      return -1;
    }
    if (a[state.sortBy] > b[state.sortBy]) {
      return 1;
    }
  });

  if (state.sortDirection === "desc") {
    simpsonsResults.reverse();
  }

  let likeTotal = 0;

  state.simpsons.forEach((character) => {
    if (character.liked) likeTotal++;
  });

  return (
    <>
      <h1>Total no of liked chars {likeTotal}</h1>
      <Controls
        onReset={onReset}
        onSort={onSort}
        onSearchInput={onSearchInput}
        sortDirection={state.sortDirection}
        sortBy={state.sortBy}
        searchInput={state.searchInput}
      />
      <Simpsons
        onDelete={onDelete}
        simpsons={simpsonsResults}
        onLikeToggle={onLikeToggle}
      />
    </>
  );
};

export default App;
