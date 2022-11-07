import * as React from "react";
import { useQuery } from "react-query";
import { RefreshRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import Header from "./components/Header/Header";
import MasonryImageList from "./components/ImageList/ImageList";
import BoxCover from "./components/BoxCover/BoxCover";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const App = () => {
  const fetchData = () => {
    return axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => response.data.data.memes);
  };

  const { data, isLoading, error, refetch } = useQuery(
    "meme-gallery",
    fetchData
  );

  if (error)
    return (
      <h1 style={{ textAlign: "center" }}>Error: {error.message}, try again</h1>
    );

  if (isLoading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  const handleClick = () => {
    refetch().then((res) => shuffle(res.data));
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: 6 }}>
        <Button
          variant="contained"
          endIcon={<RefreshRounded />}
          size="large"
          onClick={handleClick}
        >
          Load Memes
        </Button>
      </div>
      <BoxCover>
        <MasonryImageList itemData={data} />
      </BoxCover>
    </>
  );
};

export default App;
