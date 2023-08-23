"use client";
import Nav from "@components/Nav";
import store from "@redux/store";
import "@styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export const metadata = {
  title: "Chorono Reads",
  description: "Your book app",
};

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Provider store={store}>
            <div className="main">
              <div className="gradient" />
            </div>
            <div className="app">
              <Nav />
              {children}
            </div>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "#bfdbfe",
                  color: "#374151",
                },
              }}
            />
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
