import { useState } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
    navigate("/");
  };

  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-input">
          <TextField
            required
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/register" className="auth-link" href="/">
          Go to Register
        </Link>
        <Button type="submit" variant="contained" color="success">
          {isFetching ? (
            <CircularProgress
              style={{ width: "25px", height: "25px" }}
              color="inherit"
            />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </div>
  );
};
