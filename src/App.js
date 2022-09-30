import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import About from "./pages/About/About";
import Pharmacy from "./pages/Pharmacy/Pharmacy";
import SignIn from "./pages/Authentication/SignIn";
import RequireAuth from "./pages/Authentication/RequireAuth";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0052cc",
      },
      secondary: {
        main: "#edf2ff",
      },
    },
    typography: {
      fontFamily: ["source pro", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="pharmacy"
          element={
            <Pharmacy />
            // <RequireAuth>
            //   <Pharmacy />
            // </RequireAuth>
          }
        />
        <Route path="registration" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
