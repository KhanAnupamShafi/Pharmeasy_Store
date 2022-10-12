import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillMedicineBox } from "react-icons/ai";
import { BiCreditCard, BiHistory, BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { HiOutlineShieldCheck, HiPlusCircle } from "react-icons/hi";
import { MdRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import UseAdminAccess from "../../hooks/useAdminAccess";
import useSuperAdminAccess from "../../hooks/useSuperAdmin";

const DashboardLinks = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdminAccess(user);
  const [adminSuper] = useSuperAdminAccess(user);

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
        {adminSuper && (
          <>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "#EDF2F9",
                border: "2px solid #008E5D",
              }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <HiOutlineShieldCheck color="#008E5D" size={30} />
                  </ListItemIcon>
                  <ListItemText primary={"Super Admin Panel"} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />

            <NavLink
              to="/dashboard/users"
              className={(navData) =>
                navData.isActive ? "active" : "linkstyle"
              }
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <FiUsers size={30} />
                  </ListItemIcon>
                  <ListItemText
                    primary={"All Users"}
                    sx={{ textDecoration: "none" }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink
              to="/dashboard/add"
              className={(navData) =>
                navData.isActive ? "active" : "linkstyle"
              }
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <HiPlusCircle size={30} />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Add Product"}
                    sx={{ textDecoration: "none" }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink
              to="/dashboard/all"
              className={(navData) =>
                navData.isActive ? "active" : "linkstyle"
              }
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <AiFillMedicineBox size={30} />
                  </ListItemIcon>
                  <ListItemText
                    primary={"All Products"}
                    sx={{ textDecoration: "none" }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </>
        )}
        {admin && (
          <>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "#EDF2F9",
                border: "2px solid #008E5D",
              }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <HiOutlineShieldCheck color="#008E5D" size={30} />
                  </ListItemIcon>
                  <ListItemText primary={"Admin Panel"} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <NavLink
              to="/dashboard/review"
              className={(navData) =>
                navData.isActive ? "active" : "linkstyle"
              }
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <MdRateReview size={30} />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Review Sales"}
                    sx={{ textDecoration: "none" }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </>
        )}
      </List>
    </>
  );
};

export default DashboardLinks;
