import { useContext, useState } from "react";
import { Header } from "./components/header/Header";
import { Share } from "./components/share/Share";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Messenger } from "./pages/messenger/Messenger";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Share open={open} handleClose={handleClose} />
      <ToastContainer />
      <Router>
        {user && <Header handleOpen={handleOpen} />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route
            path="/profile/:username"
            element={user ? <Profile /> : <Login />}
          />
          <Route path="/messenger" element={user ? <Messenger /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
