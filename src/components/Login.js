import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { loginUser } from "../utils/api";
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userData = { username, password };
      const response = await loginUser(userData);

      localStorage.setItem("token_news", response.token);
      const token = localStorage.getItem("token_news");
      if (token) {
        window.location.href = "/";
        toast.success("User are login");
      }
    } catch (error) {
      console.error(error); // Handle error here
      toast.error("user not be ragister!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}

export default Login;
