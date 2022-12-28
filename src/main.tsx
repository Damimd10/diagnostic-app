import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import Layout from "./components/Layout";
import "./index.css";

import { mockServer } from "./config/mockServer";

const Auth = React.lazy(() => import("./pages/Auth"));
const Diagnostic = React.lazy(() => import("./pages/Diagnostic"));

const environment = process.env.NODE_ENV || "development";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

if (environment !== "production") {
  mockServer({ environment });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Diagnostic />} />
            </Route>
            <Route path="/signup" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
