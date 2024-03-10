import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <Box>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography variant="h3">{counter}</Typography>
    </Box>
  );
}
