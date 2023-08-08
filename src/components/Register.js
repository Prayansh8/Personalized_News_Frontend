import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { registerUser } from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const userData = { username, password };
      await registerUser(userData);
      toast.success("User Are Ragister!");
      navigate("/login");
    } catch (error) {
      console.error(error); // Handle error here
      toast.error("User Not Be Ragester, Please Try Again!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Register</Typography>
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
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
}

export default Register;
