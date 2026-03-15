import { createBrowserRouter } from "react-router-dom";
import MasterLayOut from "../layouts/MasterLayOut/MasterLayOut";

import Login from "../pages/Auth/Login/Login";
import AuthLayOut from "@/layouts/AuthLayOut/AuthLayOut";
import NotFound from "@/pages/NotFound";
import ForgetPassword from "@/pages/Auth/ForgetPassword/ForgetPassword";
import AdminLayOut from "@/layouts/AdminLayOut/AdminLayOut";
import Home from "@/pages/Admin/Home/Home";
import OurStory from "@/pages/Admin/OurStory/OurStory";
import OurVision from "@/pages/Admin/OurVision/OurVision";
import Location from "@/pages/Admin/Location/Location";
import Store from "@/pages/Admin/Store/Store";
import GallerySection from "@/pages/Admin/GallerySection/GallerySection";
import BrandExperience from "@/pages/Admin/BrandExperience/BrandExperience";
import CustomerExperience from "@/pages/Admin/CustomerExperience/CustomerExperience";
import ContactUs from "@/pages/Admin/ContactUs/ContactUs";
import Website from "../pages/Website/Website"
import ResetPassword from "@/pages/Auth/ResetPassword/ResetPassword";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayOut />,
    errorElement: <NotFound />,
    children: [
      { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },

  {
    path: "/admin",
    element: [<AdminLayOut />],
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "story", element: <OurStory /> },
      { path: "vision", element: <OurVision /> },
      { path: "location", element: <Location /> },
      { path: "store", element: <Store /> },
      { path: "gallery", element: <GallerySection /> },
      { path: "brand-experience", element: <BrandExperience /> },
      { path: "customer-experience", element: <CustomerExperience /> },
      { path: "contactus", element: <ContactUs /> },
    ],
  },

  {
    path: "/",
    element: <MasterLayOut />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Website/>},
     
    ],
  },
]);
