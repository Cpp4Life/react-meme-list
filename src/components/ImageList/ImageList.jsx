import * as React from "react";
import ImageList from "@mui/material/ImageList";
import MemeList from "../MemeList/MemeList";

const MasonryImageList = (props) => {
  return (
    <ImageList variant="masonry" cols={3} gap={6}>
      {props.itemData.map((item) => (
        <MemeList key={item.id} name={item.name} url={item.url} />
      ))}
    </ImageList>
  );
};

export default MasonryImageList;
