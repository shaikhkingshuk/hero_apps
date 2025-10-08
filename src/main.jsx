import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import StartingPage from "./Components/StartingPage/StartingPage.jsx";
import AllApps from "./Components/Apps/AllApps.jsx";
import AppNotFound from "./Components/Apps/AppNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("/jsonData/halfJsonData.json"),
        Component: StartingPage,
      },
      {
        path: "/allApps",
        loader: () => fetch("/jsonData/fullJsonData.json"),
        Component: AllApps,
      },
    ],
  },
  {
    path: "/allApps/app_not_found",
    Component: AppNotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
