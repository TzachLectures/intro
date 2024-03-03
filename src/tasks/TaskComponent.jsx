import { Box, Typography } from "@mui/material";
import React from "react";

export default function TaskComponent({ task }) {
  return (
    <Box>
      <Typography>שם: {task.name}</Typography>
      <Typography>תאריך: {task.date}</Typography>
      <Typography>סוג: {task.type}</Typography>
    </Box>
  );
}
