import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { BiDollar, BiHeadphone } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import LogoSVG from "../../assets/logo/logo_alt.png";
import {
  Box,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";
import img from "../../assets/slides/about.png";
import { Flip } from "react-awesome-reveal";
import { Container } from "@mui/system";

const StoryBlock = () => {
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
                src={`${img}`}
                srcSet={`${img}`}
                alt="about us pic"
                loading="lazy"
                style={{ height: 610, objectFit: "cover" }}
              />
              <ImageListItemBar
                title="We Care"
                subtitle="for You"
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about`}
                  >
                    <img width={200} src={LogoSVG} alt="logo alt" />
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
                Pharmeasy Product
              </Typography>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontSize={26}
                gutterBottom
              >
                Why Choose Us?
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Flip>
                  <BiDollar size={50} color="#04626c" />
                </Flip>

                <Typography variant="body2" fontSize={18}>
                  Low Price Guarantee
                </Typography>
              </Stack>
              <Typography variant="body2" fontSize={14}>
                At Pharmeasy, we put our value in More Care 4 Less Cost. We know
                that peaople want the best price for their pharmacy products but
                also want to be looked after and cared for.
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Flip>
                  <TbCertificate size={45} color="#04626c" />
                </Flip>

                <Typography variant="body2" fontSize={18} pl="8px">
                  Certified by PharmacyChecker
                </Typography>
              </Stack>
              <Typography variant="body2" fontSize={14}>
                At Pharmeasy, we put our value in More Care 4 Less Cost. We know
                that peaople want the best price for their pharmacy products but
                also want to be looked after and cared for.
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Flip>
                  <BiHeadphone size={50} color="#04626c" />
                </Flip>

                <Typography variant="body2" fontSize={18} pl="6px">
                  Exceptional Customer Service
                </Typography>
              </Stack>
              <Typography variant="body2" fontSize={14}>
                At Pharmeasy, we put our value in More Care 4 Less Cost. We know
                that peaople want the best price for their pharmacy products but
                also want to be looked after and cared for.
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default StoryBlock;
