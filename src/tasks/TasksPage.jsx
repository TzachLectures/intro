import React from "react";
import TaskComponent from "./TaskComponent";
import { Box, Container, Typography } from "@mui/material";

const tasks = [
  { name: "משימה 1", date: "03-03-2024", type: "שיעורי בית" },
  { name: "משימה 2", date: "04-03-2024", type: "ניקיון" },
  { name: "משימה 3", date: "05-03-2024", type: "שיעורי בית" },
  { name: "משימה 4", date: "06-03-2024", type: "שיעורי בית" },
  { name: "משימה 5", date: "07-03-2024", type: "ניקיון" },
  { name: "משימה 6", date: "08-03-2024", type: "מחקר" },
  { name: "משימה 7", date: "09-03-2024", type: "מחקר" },
  { name: "משימה 8", date: "10-03-2024", type: "מחקר" },
];

const search = "ניק";

export default function TasksPage() {
  return tasks.length === 0 ? (
    <Typography>there is no Tasks to display</Typography>
  ) : (
    <Container sx={{ textAlign: "right" }}>
      {tasks.map((task, index) =>
        task.type.includes(search) ? (
          <Box sx={{ mb: 10 }} key={index}>
            <TaskComponent task={task} />
          </Box>
        ) : null
      )}
    </Container>
  );
}
