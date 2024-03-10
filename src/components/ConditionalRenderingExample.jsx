import { Box, Typography } from "@mui/material";
import React from "react";

export default function ConditionalRenderingExample() {
  let user = {
    name: "Avi",
    email: "yosi@gmail.com",
  };
  //let user = null;
  return (
    <Box>
      {user ? (
        <Typography>Hello welcome {user.name}</Typography>
      ) : (
        <Typography>Access denied</Typography>
      )}
    </Box>
  );
}
