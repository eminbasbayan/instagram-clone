import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar, Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";
import axios from "axios";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

export const Header = ({ handleOpen }) => {
  const [users, setUsers] = useState("");
  const [search, setSearch] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getUsersList = async () => {
      const res = await axios.get("/users/list");
      setUsers(res.data);
    };
    getUsersList();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setUserFilter(
      users.filter((user) => user.username.includes(e.target.value))
    );
  };

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: "relative" }}>
              <div className="search">
                <SearchIcon className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                  onClick={handleClick}
                />
                {open ? (
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      {userFilter.length > 0 ? (
                        userFilter.slice(0, 3).map((user) => (
                          <Link
                            to={"/profile/" + user.username}
                            className="search-result-link"
                            key={user._id}
                            onClick={() => setOpen(false)}
                          >
                            <Avatar
                              src={
                                user.profilePicture && PF + user.profilePicture
                              }
                              sx={{ width: 28, height: 28 }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                lineHeight: "1",
                                fontSize: "12px",
                              }}
                            >
                              <b>{user.username}</b>
                              <span>{user.fullName}</span>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="search-resul-text">
                          {search.length > 0
                            ? "Aradığın kullanıcı bulunamadı."
                            : "Kullanıcı Ara"}
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            </Box>
          </ClickAwayListener>
          <div className="header-links">
            <Link to="/">
              <HomeOutlinedIcon className="icon" />
            </Link>
            <Link to="/messenger">
              <ChatOutlinedIcon className="icon" />
            </Link>
            <AddBoxOutlinedIcon
              className="icon" 
              style={{ cursor: "pointer" }}
              onClick={handleOpen}
            />
            <Link to={"/profile/" + user.username}>
              <Avatar
                alt="Remy Sharp"
                src={user.profilePicture && PF + user.profilePicture}
                sx={{ width: 28, height: 28 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
