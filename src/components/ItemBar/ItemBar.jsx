import * as React from "react";
import { ImageListItemBar, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const ItemBar = (props) => {
  return (
    <ImageListItemBar
      title={props.name}
      actionIcon={
        <Tooltip title={props.url}>
          <IconButton
            sx={{
              color: "rgba(255, 255, 255, 0.54)",
            }}
            aria-label={`info about ${props.name}`}
          >
            <InfoIcon />
          </IconButton>
        </Tooltip>
      }
    />
  );
};

export default ItemBar;
