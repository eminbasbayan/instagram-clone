import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./share.css";

export const Share = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-box">
          <div className="modal-head">
            <Typography variant="span">Create New Post</Typography>
          </div>
          <form className="modal-body">
            <div className="modal-body-top">
              <Avatar
                alt="Remy Sharp"
                src={"/images/person/0.png"}
                sx={{ width: 46, height: 46 }}
              />
              <input
                className="modal-text-input"
                type="text"
                placeholder="Write a post."
              />
              <Button type="submit" variant="contained" height="10px">
                Paylaş
              </Button>
            </div>
            <div className="modal-buttons">
              <label htmlFor="inputFile" style={{ cursor: "pointer" }}>
                <button type="button" style={{ pointerEvents: "none" }}>
                  <AddAPhotoOutlinedIcon />
                  <b>Fotoğraf</b>
                </button>
              </label>
              <input type="file" id="inputFile" style={{ display: "none" }} />
              <button>
                <VideoLibraryOutlinedIcon />
                <b>Video</b>
              </button>
              <button>
                <CalendarMonthOutlinedIcon />
                <b>Etkinlik</b>
              </button>
              <button>
                <ShortTextIcon />
                <b>Yazı Yaz</b>
              </button>
            </div>
            <div className="share-img-wrapper">
              <img className="share-img" alt="" src="/images/post/1.png" />
              <CancelOutlinedIcon className="cancel-icon" color="error" />
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
