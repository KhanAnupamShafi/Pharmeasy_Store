import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import About from "./pages/About/About";
import Pharmacy from "./pages/Pharmacy/Pharmacy";
import SignIn from "./pages/Authentication/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./pages/Authentication/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductUnit from "./components/ProductUnit/ProductUnit";
import MyOrders from "./pages/Dashboard/MyOrders";
import Payment from "./pages/Dashboard/Payment";
import Users from "./pages/Dashboard/Users";

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
      fontFamily: ["Open sans", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="product"
          element={
            <Pharmacy />
            // <RequireAuth>
            //   <Pharmacy />
            // </RequireAuth>
          }
        />
        <Route
          path="product/:id"
          element={
            <RequireAuth>
              <ProductUnit />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        <Route path="registration" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
