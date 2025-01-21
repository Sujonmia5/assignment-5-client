import About from "../pages/about";
import Contact from "../pages/contact";
import Faq from "../pages/faq";
import Gallery from "../pages/gallery";
import Home from "../pages/home";
import Pricing from "../pages/pricing";
import Spaces from "../pages/spaces";
import { TNavbarItems } from "../types/Navbar";

export const menuItems: TNavbarItems[] = [
  {
    name: "home",
    element: <Home />,
  },
  {
    name: "spaces",
    element: <Spaces />,
    children: [
      {
        name: "pricing",
        element: <Pricing />,
      },
      {
        name: "gallery",
        element: <Gallery />,
      },
      {
        name: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    name: "about",
    element: <About />,
  },
  {
    name: "contact",
    element: <Contact />,
  },
];
