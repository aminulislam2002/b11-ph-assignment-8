import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import LawyerDetails from "./components/LawyerDetails/LawyerDetails.jsx";
import MyBookings from "./components/MyBookings/MyBookings.JSX";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "lawyer/:license_number",
        Component: LawyerDetails,
      },
      {
        path: "my-bookings",
        Component: MyBookings,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
