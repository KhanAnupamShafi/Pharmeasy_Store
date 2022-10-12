import React, { useEffect } from "react";

import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  LinearProgress,
  TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { MuiButton } from "./SignIn";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SignUp = ({ userGoogle }) => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  const [token] = useToken(user || userGoogle);
  const navigate = useNavigate();
  const {
    register,
    getValues,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({});

  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data?.email1, data?.password1);
    await updateProfile({ displayName: data?.firstName });
    // navigate("/home");
    reset();
  };

  let signInError;
  let loadingButton;
  if (loading || updating) {
    loadingButton = (
      <p>
        <LinearProgress />
      </p>
    );
  }
  if (error || errorUpdate) {
    signInError = (
      <>
        <Alert severity="error">{error?.message || errorUpdate?.message}</Alert>
      </>
    );
  }

  //useEffect required to avoid Cannot update a component error
  useEffect(() => {
    if (token) {
      navigate("/", { replace: "true" });
    }
  }, [token, navigate]);
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 4, width: "100%" }}
    >
      <Grid container spacing={2}>
        <Grid item xs sm={6}>
          <TextField
            {...register("firstName", {
              required: true,
            })}
            autoComplete="given-name"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("lastName")}
            fullWidth
            id="lastName"
            label="Last Name (optional)"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register("email1", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            required
            fullWidth
            id="email1"
            label="Email Address"
            name="email1"
            autoComplete="email"
          />
          {errors.email1?.type === "pattern" && (
            <Alert severity="warning">{errors.email1?.message}</Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register("password1", {
              required: true,
              minLength: {
                value: 6,
                message: "Use minimum 6 characters",
              },
            })}
            required
            fullWidth
            name="password1"
            label="Password"
            type="password"
            id="password1"
            autoComplete="new-password"
          />
          {errors.password1?.type === "minLength" && (
            <Alert severity="warning">{errors.password1?.message}</Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register("password2", {
              required: true,
            })}
            required
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="password2"
            autoComplete="confirm-password"
          />
          {watch("password2") !== watch("password1") &&
          getValues("password2") ? (
            <Alert severity="warning">Passwords do not match</Alert>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, promotions and updates via email"
          />
        </Grid>
      </Grid>
      {loadingButton}
      <MuiButton type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
        Register
      </MuiButton>
      {signInError}
    </Box>
  );
};

export default SignUp;
