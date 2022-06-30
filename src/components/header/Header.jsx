import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar, Box } from "@mui/material";
import { Logo } from "../logo/Logo";
import "./header.css";

export const Header = ({ handleOpen }) => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <Box sx={{ position: "relative" }}>
            <div className="search">
              <SearchIcon className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </Box>
          <div className="header-links">
            <a href="/">
              <HomeOutlinedIcon className="icon" />
            </a>
            <a href="/">
              <ChatOutlinedIcon className="icon" />
            </a>
            <AddBoxOutlinedIcon
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={handleOpen}
            />
            <a href={"/"}>
              <Avatar
                alt="Remy Sharp"
                src={"/images/person/0.png"}
                sx={{ width: 28, height: 28 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
