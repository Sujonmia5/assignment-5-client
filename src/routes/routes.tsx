import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/main";
import DashboardLayout from "../components/layout/dashboard";
import Home from "../pages/home";
import About from "../pages/about";
import Spaces from "../pages/spaces";
import Error from "../pages/Error";
import Login from "../pages/login";
import Register from "../pages/register";
import Contact from "../pages/contact";
import SingleRoom from "../pages/singleRoom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/spaces",
        element: <Spaces />,
      },
      {
        path: "/spaces/:id",
        element: <SingleRoom />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/helo",
        element: <div>dashboard</div>,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
