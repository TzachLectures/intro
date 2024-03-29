import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
export default function FormPage() {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const handleChange = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: 2,
        borderRadius: 5,
        p: 3,
      }}
    >
      <TextField
        placeholder="email"
        value={user.email}
        onChange={handleChange}
        name="email"
      />
      <TextField
        placeholder="password"
        type="password"
        value={user.password}
        onChange={handleChange}
        name="password"
      />
      <TextField
        placeholder="name"
        value={user.name}
        onChange={handleChange}
        name="name"
      />
      <Button
        onClick={() => {
          console.log(user);
        }}
      >
        Save
      </Button>
    </Box>
  );
}
