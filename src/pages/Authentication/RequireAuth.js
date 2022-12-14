import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <LinearProgress color="success" />
      </Stack>
    );
  }
  if (!user) {
    return (
      <Navigate
        to="/registration"
        state={{ from: location }}
        replace
      ></Navigate>
    );
  }
  return children;
};

export default RequireAuth;
