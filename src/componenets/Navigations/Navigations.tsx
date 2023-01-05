import React, { FC, ReactNode } from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { messageService } from "../../service/messageService";
import "./Navigations.scss";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const Navigations: FC<any> = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const userProfileNode = (): ReactNode => {
    return (
      <div className="user-profile">
        <div
          className="profile-img"
          onClick={() => {
            messageService.sendMessage({ action: "HIDE_PREVIEW" });
          }}
        ></div>
        <Typography variant="h5" className="user-name">
          Eric Hoffman
        </Typography>
      </div>
    );
  };

  const navLinksNode = (): ReactNode => {
    return (
      <div className="menu-wrapper">
        <Divider />
        <MenuList>
          <MenuItem className="active">
            <ListItemIcon>
              <SearchIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Discover</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PlayCircleOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Playlist</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LiveTvIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Movie</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <TvIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>TV Shows</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FormatListBulletedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>My List</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <MoreTimeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Watch Later</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Recomended</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </div>
    );
  };

  return (
    <>
      <IconButton onClick={handleDrawerToggle} className="hamburger-icon">
        <MenuOutlinedIcon />
      </IconButton>

      <div className="app-nav-wrapper">
        <Drawer
          className="mobile-drawer"
          variant="persistent"
          sx={{
            width: 275,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 275,
              boxSizing: "border-box",
            },
          }}
          open={mobileOpen}
        >
          <Box>
            <IconButton
              className="hamburger-icon-close"
              onClick={handleDrawerToggle}
            >
              <ChevronLeftOutlinedIcon />
            </IconButton>
          </Box>

          {userProfileNode()}
          {navLinksNode()}
        </Drawer>

        <div className="app-navigation">
          {userProfileNode()}
          {navLinksNode()}
        </div>
      </div>
    </>
  );
};

export default Navigations;
