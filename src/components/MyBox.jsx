import { Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function MyBox() {
  const [color, setColor] = useState("red");
  const [size, setSize] = useState(50);

  const changeColor = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };

  const sizeUp = () => {
    if (size < 200) {
      setSize((prev) => prev + 10);
    }
  };

  const sizeDown = () => {
    setSize((prev) => (prev > 10 ? prev - 10 : 10));
  };

  return (
    <>
      <Box sx={{ backgroundColor: color }} width={size} height={size}></Box>

      <Button onClick={changeColor}>Change color</Button>
      <Button onClick={sizeUp}>+</Button>
      <Button onClick={sizeDown}>-</Button>
    </>
  );
}
