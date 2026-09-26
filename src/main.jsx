import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router";
import BookProvider from "./context/BookProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
);
