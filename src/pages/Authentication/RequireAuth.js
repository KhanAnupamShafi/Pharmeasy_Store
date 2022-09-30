import { LinearProgress } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <p>
        <LinearProgress />
      </p>
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
