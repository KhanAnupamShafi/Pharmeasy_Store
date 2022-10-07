import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { BiCreditCard, BiHistory, BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const DashboardLinks = () => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#EDF2F9",
        }}
      >
        <NavLink
          end
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <BiHomeAlt size={30} />
              </ListItemIcon>
              <ListItemText primary={"Go Home"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink
          end
          to="/dashboard"
          className={(navData) => (navData.isActive ? "active" : "linkstyle")}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <BiHistory size={30} />
              </ListItemIcon>
              <ListItemText primary={"My Order"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/dashboard/payment"
          className={(navData) => (navData.isActive ? "active" : "linkstyle")}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <BiCreditCard size={30} />
              </ListItemIcon>
              <ListItemText
                primary={"Payment"}
                sx={{ textDecoration: "none" }}
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/dashboard/users"
          className={(navData) => (navData.isActive ? "active" : "linkstyle")}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <FiUsers size={30} />
              </ListItemIcon>
              <ListItemText
                primary={"Customers"}
                sx={{ textDecoration: "none" }}
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </>
  );
};

export default DashboardLinks;
