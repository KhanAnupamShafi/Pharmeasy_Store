import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import ScrollTop from "./hooks/useScrollTop";
const queryClient = new QueryClient();
// const stripePromise = loadStripe(
//   "pk_test_51JwnwsAhRvIuSrv7SUBvBMIECkmBpCOapiW0GXIRiTIUnk8Y7ltilJ88fpezd1mZMbikl8eIExIqJca3gG7VD6km00NLErVXan"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="payment"
        cartMode="checkout-session"
        // stripe={stripePromise}
        currency="USD"
      >
        <BrowserRouter>
          <ScrollTop>
            <App />
          </ScrollTop>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
