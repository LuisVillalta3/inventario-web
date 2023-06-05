import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  Typography,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLayoutStore } from "@/store";

const AppHeader = () => {
  const navigate = useNavigate();
  const appTitle = useLayoutStore((state) => state.appTitle);
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header>
      <button className="menu-btn" onClick={toggleSidebar}>
        <MenuIcon fontSize="large" />
      </button>
      <div className="title">
        <FontAwesomeIcon icon={faBox} size="xl" />
        <p>{appTitle}</p>
      </div>
      <div className="btn">
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar sx={{ bgcolor: "#05374C" }}>OP</Avatar>
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem key="Cerrar sesión" onClick={() => navigate("/login")}>
              <Typography textAlign="center">Cerrar sesión</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </div>
    </header>
  );
};

export default AppHeader;
