import * as React from "react";
import Box from "@mui/material/Box";

const BoxCover = ({ children }) => {
  return (
    <Box
      sx={{
        width: 1080,
        height: 1280,
        marginX: "auto",
        overflowY: "scroll",
        paddingX: 7,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxCover;
