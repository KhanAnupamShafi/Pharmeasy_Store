import { LinearProgress, Stack } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import UseAdminAccess from "../../hooks/useAdminAccess";
// import useSuperAdminAccess from "../../hooks/useSuperAdmin";

const RequireMaster = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoader] = UseAdminAccess(user);

  const location = useLocation();
  if (loading || adminLoader) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <LinearProgress color="success" />
      </Stack>
    );
  }
  if (!user || !admin) {
    signOut(auth);
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

export default RequireMaster;
