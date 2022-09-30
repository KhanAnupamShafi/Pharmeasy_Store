import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import { styled } from "@mui/material/styles";

const FeaturedProducts = ({ products }) => {
  const classes = useStyles();
  return (
    <>
      {products.map((data) => (
        <Grid2
          key={data.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            verticalAlign: "middle",
          }}
        >
          <Card className={classes.card}>
            <CardHeader
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
                fontSize: "16px",
              }}
              avatar={
                <Avatar
                  className={classes.avatar}
                  sx={{
                    color: "white",
                    bgcolor: "#ef837b",
                    fontSize: "14px",
                    p: 3,
                    width: "2.6rem",
                    height: "2.6rem",
                  }}
                  aria-label="sale"
                >
                  50% OFF
                </Avatar>
              }
            />
            <CardMedia
              className={classes.media}
              component="img"
              image={data.imgPath}
              alt="product photo"
            />
          </Card>
          <CardContent className={classes.content}>
            <Typography
              variant={"subtitle2"}
              sx={{ fontSize: 16 }}
              gutterBottom
              color={deepPurple[900]}
            >
              {data?.title}
            </Typography>
            <MuiButton variant="outlined">Shop Now</MuiButton>
          </CardContent>
        </Grid2>
      ))}
    </>
  );
};

export default FeaturedProducts;

const useStyles = makeStyles((Theme) => ({
  card: {
    position: "relative",
    overflow: "hidden",
    minHeight: 250,
    maxWidth: 340,
    textAlign: "center",
    display: "inline-block",
    cursor: "pointer",
    transition: " all .4s ease-in",
    borderRadius: 8,
    boxShadow: "2px 1px 6px 3px #ededed",
    "&:hover": {
      boxShadow: "0 8px 20px -12px rgba(0,0,0,0.6)",
    },
    "&:hover $media": {
      transform: "scale(1.10)",
    },
    "&:focus $media": {
      transform: "scale(1.10)",
    },
    // marginBottom: 50,
  },

  avatar: {
    minWidth: 0,
    borderRadius: "50%",
    lineHeight: 1,
    // "&:not(:first-of-type)": {
    //   marginLeft: Theme.spacing(100),
    // },
  },

  media: {
    verticalAlign: "middle",
    transition: "all .5s ease-out",
  },

  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: 130,
    textAlign: "center",
    padding: 10,
  },
}));

const MuiButton = styled(Button)`
  color: #d7dfef;
  text-align: center;
  background-color: #26a69a;
  box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
  &:hover {
    background-color: #004d40;
  }
`;
