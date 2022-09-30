import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TopHeader from "../../components/TopHeader/TopHeader";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { MdLockOutline, MdMedication } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import SignUp from "./SignUp";
import Footer from "../../components/Footer/Footer";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data?.email, data?.password);

    reset();
  };

  //useEffect required to avoid Cannot update a component error
  useEffect(() => {
    if (user || userGoogle) {
      navigate(from, { replace: "true" });
      console.log(user || userGoogle);
    }
  }, [user, userGoogle, from, navigate]);

  let loadingButton;
  let signInError;
  if (loading || loadingGoogle) {
    loadingButton = (
      <p>
        <LinearProgress />
      </p>
    );
  }
  if (error || errorGoogle) {
    signInError = (
      <>
        <Alert severity="error">{error?.message || errorGoogle?.message}</Alert>
      </>
    );
  }

  const classes = useStyles();
  return (
    <>
      <TopHeader />
      <HeaderMain />
      <Navbar />
      <Box sx={{ backgroundColor: "#f6f6f6" }}>
        <Container sx={{ padding: "40px 0" }}>
          <Paper elevation={3}>
            <Grid2 container sx={{ padding: "0 20px" }}>
              <Grid2 item md>
                <Box className={classes.box}>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{ color: "success.dark" }}
                  >
                    Register
                  </Typography>
                  <SignUp />
                </Box>
              </Grid2>
              <Divider orientation="vertical" flexItem>
                <Avatar sx={{ bgcolor: "success.light" }}>
                  <MdMedication fontSize="large" />
                </Avatar>
              </Divider>
              <Grid2 item md>
                <Box className={classes.box}>
                  <Avatar sx={{ m: 1, bgcolor: "success.light" }}>
                    <MdLockOutline fontSize="large" />
                  </Avatar>
                  <Typography component="h1" variant="h3">
                    Sign
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{ color: "success.dark" }}
                    >
                      in
                    </Typography>
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                      mt: 1,
                      width: "100%",
                    }}
                  >
                    <TextField
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      autoFocus
                    />
                    {errors.email?.type === "required" && (
                      <Alert severity="warning">Email is required!</Alert>
                    )}
                    {errors.email?.type === "pattern" && (
                      <Alert severity="warning">{errors.email?.message}</Alert>
                    )}
                    <TextField
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 6,
                          message: "Use minimum 6 characters",
                        },
                      })}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    {errors.password?.type === "required" && (
                      <Alert severity="warning">Password is required!</Alert>
                    )}
                    {errors.password?.type === "minLength" && (
                      <Alert severity="warning">
                        {errors.password?.message}
                      </Alert>
                    )}
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                      sx={{ mb: "0.7em" }}
                    />
                    {loadingButton}
                    <MuiButton type="submit" variant="outlined" sx={{ mt: 1 }}>
                      Sign In
                    </MuiButton>
                    {signInError}
                    <Grid2 container flexDirection={"column"}>
                      <Grid2 item xs>
                        <Link to="/">
                          <Typography
                            component="span"
                            variant="h6"
                            sx={{ color: "success.dark" }}
                          >
                            Forgot Your Password
                          </Typography>
                        </Link>
                      </Grid2>

                      <Grid2 item xs>
                        <Divider
                          orientation="horizontal"
                          flexItem
                          sx={{ padding: "1rem 2rem" }}
                        >
                          Or
                        </Divider>
                        <MuiButton2
                          onClick={() => signInWithGoogle()}
                          variant="outlined"
                          fullWidth
                        >
                          <img
                            src="https://img.icons8.com/color/16/000000/google-logo.png"
                            alt="logo "
                          />
                          Continue With Google
                        </MuiButton2>
                      </Grid2>
                    </Grid2>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SignIn;
const useStyles = makeStyles((theme) => ({
  box: {
    margin: "4rem 0",
    padding: "0 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const MuiButton = styled(Button)`
  display: block;
  width: 40%;
  margin: auto;
  box-shadow: none;
  text-transform: none;
  font-size: 16px;
  padding: 6px 12px;
  border: 1px solid;
  line-height: 1.5;
  background-color: #29873c;
  border-color: #29873c;
  color: #fff;
  margin-bottom: 1em;
  &:hover {
    background-color: #004d40;
  }
`;
const MuiButton2 = styled(Button)`
  display: block;
  margin: auto;
  box-shadow: none;
  text-transform: none;
  font-size: 16px;
  font-weight: 400;
  padding: 6px 12px;
  border: 1px solid;
  line-height: 1.5;
  border-color: #29873c;
  color: #000;

  img {
    margin-right: 5px;
    margin-bottom: 1px;
    vertical-align: middle;
    width: 26px;
  }
`;
