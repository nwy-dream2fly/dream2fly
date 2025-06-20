import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import './styles/toast-custom.css';

export default function App() {
 return (
    <>
      <AppRoutes />
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false} />
    </>
  );
}