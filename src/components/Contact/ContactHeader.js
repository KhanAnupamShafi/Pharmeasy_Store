import {
  Box,
  Collapse,
  Container,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Flip } from "react-awesome-reveal";
import Grid2 from "@mui/material/Unstable_Grid2";
import { TbSend } from "react-icons/tb";
import { BiChevronDownCircle, BiChevronUpCircle, BiSend } from "react-icons/bi";

import slideImage from "../../assets/logo/footerMobile.jpg";
import { FaGooglePlay } from "react-icons/fa";

const ContactHeader = () => {
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return (
    <Container fixed>
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ mt: 8, mb: 6 }}
      >
        <Grid2 sm={12} md={6}>
          <Box sx={{ pl: 2, pr: 2, ml: "auto" }}>
            <ImageListItem>
              <img
                src={`${slideImage}`}
                srcSet={`${slideImage}`}
                alt="about us pic"
                loading="lazy"
                style={{ height: 610, objectFit: "contain" }}
              />
              <ImageListItemBar
                title="We Care"
                subtitle="for You"
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)", pr: 1 }}
                    aria-label={`info about`}
                  >
                    <FaGooglePlay />
                    Download App
                  </IconButton>
                }
              />
            </ImageListItem>
          </Box>
        </Grid2>
        <Grid2 sm={12} md={6}>
          <Box sx={{ maxWidth: 600, height: "100%" }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                fontSize={20}
                variant="subtitle2"
                color="#04626c"
                gutterBottom
              >
                Pharmeasy
              </Typography>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontSize={28}
                gutterBottom
              >
                We Have Everything You Need
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Flip>{/* <BiDollar size={50} color="#04626c" /> */}</Flip>

                <Typography variant="body2" fontWeight={"bold"} fontSize={18}>
                  About Us
                </Typography>
              </Stack>
              <Typography variant="body2" fontSize={14}>
                Pharmeasy is a leading community pharmacy and healthcare
                provider with over 1,400 pharmacies across Bangladesh, mainly in
                community and health centre locations. We employ around 1,000
                staff and dispense over 150 million prescription items every
                year.
              </Typography>
            </Box>

            <List
              sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography fontSize={30}>Who We Are?</Typography>
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <TbSend size={25} color="#04626c" />
                </ListItemIcon>
                <ListItemText primary="In 2022 Pharmeasy had a turnover of 1.8 billion" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <TbSend size={25} color="#04626c" />
                </ListItemIcon>
                <ListItemText primary="We dispensed over 150 million prescription items" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <TbSend size={25} color="#04626c" />
                </ListItemIcon>
                <ListItemText primary="We offer more private consultation areas than any other pharmacy –they're currently available in 97% of our pharmacies" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <BiSend size={25} color="#04626c" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle2"
                      fontSize={18}
                      fontWeight={"bold"}
                      style={{ color: "#04626c" }}
                    >
                      What We Do
                    </Typography>
                  }
                />
                {open ? (
                  <BiChevronUpCircle size={25} color="#04626c" />
                ) : (
                  <BiChevronDownCircle size={25} color="#04626c" />
                )}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 5, ml: 4 }}>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1">
                          We are committed to ‘healthcare for life’ and our
                          vision is to be a great healthcare brand.
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleClick2}>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <BiSend size={25} color="#04626c" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle2"
                      fontSize={18}
                      fontWeight={"bold"}
                      style={{ color: "#04626c" }}
                    >
                      Our History
                    </Typography>
                  }
                />
                {open2 ? (
                  <BiChevronUpCircle size={25} color="#04626c" />
                ) : (
                  <BiChevronDownCircle size={25} color="#04626c" />
                )}
              </ListItemButton>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 5, ml: 4 }}>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1">
                          During our long history, a number of esteemed names in
                          our sector have been involved in creating the
                          Pharmeasy we know today, and provided us with an
                          enviable launch pad for the future. Such names include
                          Savory & Moore, of course, Lloyds Chemist and Hills
                          Pharmacy.
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ContactHeader;
