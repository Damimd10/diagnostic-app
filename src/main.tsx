import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { InterfaceContextProvider } from "contexts/InterfaceContext";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <InterfaceContextProvider>
        <BrowserRouter></BrowserRouter>
      </InterfaceContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
