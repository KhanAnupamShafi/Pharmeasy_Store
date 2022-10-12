import {
  AppBar,
  Avatar,
  Box,
  Chip,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiMenu, BiUserCircle } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import DashboardLinks from "../../components/DashboardLinks/DashboardLinks";
// import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import { StyledBadge } from "../../components/StyledComponent/StyledBadge";
// import Navbar from "../../components/Navbar/Navbar";
import TopHeader from "../../components/TopHeader/TopHeader";
import auth from "../../Firebase/firebase.init";
import UseAdminAccess from "../../hooks/useAdminAccess";
import useSuperAdminAccess from "../../hooks/useSuperAdmin";

const drawerWidth = 240;

const Dashboard = (props) => {
  const [user] = useAuthState(auth);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [admin] = UseAdminAccess(user);
  const [adminSuper] = useSuperAdminAccess(user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ flexDirection: "column", p: 1, gap: 1 }}>
        <StyledBadge
          color="success"
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {user.photoURL ? (
            <Avatar
              alt="profile pic"
              src={user?.photoURL}
              sx={{ width: 48, height: 48, border: `2px solid #008E5D` }}
            />
          ) : (
            <BiUserCircle size={48} />
          )}
        </StyledBadge>

        <Typography variant="subtitle1">{user?.displayName}</Typography>

        <Stack
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {adminSuper && (
            <Typography variant="overline">
              <FaBolt color="#e91e63" />
              Super
            </Typography>
          )}
          {admin && <Chip label="Admin" size="small" />}
        </Stack>
      </Toolbar>
      <Divider />
      <DashboardLinks />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <TopHeader />
      <HeaderMain />
      {/* <Navbar /> */}
      <Box position="relative">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CssBaseline />
          <AppBar
            position="relative"
            sx={{
              width: { md: `calc(100% - ${drawerWidth}px)` },
              ml: { md: `${drawerWidth}px` },
              bgcolor: "#008E5D",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <BiMenu size={25} />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", md: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { md: `calc(100% - ${drawerWidth}px)` },
              ml: { md: `${drawerWidth}px` },
            }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      </Box>

      {/* <Footer /> */}
    </>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
