import { Button, TextField } from "@mui/material";
import "./register.css";

export const Register = () => {
  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form">
        <h2>Register</h2>
        <div className="form-input">
          <TextField
            required
            type="text"
            label="Full Name"
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <TextField required type="text" label="Username" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField required type="email" label="Email" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password Confirm"
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <TextField required type="file" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="text"
            label="Biography"
            variant="outlined"
          />
        </div>
        <a href="/" className="auth-link">
          Back to Login
        </a>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  );
};
