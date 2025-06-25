import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import AppLoader from "./components/AppLoader";
import { AuthProvider } from "./context/AuthContext";
import "./styles/toast-custom.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initApp = async () => {
      try {
        await fetchInitialData();
      } catch (error) {
        console.error("App init error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initApp();
  }, []);

  const fetchInitialData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("API calls done");
        resolve();
      }, 1000);
    });
  };

  return (
    <AuthProvider>
      {isLoading ? (
        <AppLoader />
      ) : (
        <>
          <AppRoutes />
          <ToastContainer autoClose={2000} hideProgressBar={false} />
        </>
      )}
    </AuthProvider>
  );
}
