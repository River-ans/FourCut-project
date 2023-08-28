import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout";
import Index from "./routes";
import Theme, { loader as themesLoader } from "./routes/theme";
import Photo, { loader as themeLoader } from "./routes/photo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />}></Route>
      <Route path="theme" element={<Theme />} loader={themesLoader}></Route>
      <Route
        path="theme/:themeId"
        element={<Photo />}
        loader={themeLoader}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
