import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ItemBar from "../ItemBar/ItemBar";

const MemeList = (props) => {
  return (
    <ImageListItem>
      <img
        src={`${props.url}?w=248&fit=crop&auto=format`}
        srcSet={`${props.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={props.name}
        loading="lazy"
      />
      <ItemBar name={props.name} url={props.url} />
    </ImageListItem>
  );
};

export default MemeList;
