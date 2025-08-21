import App from "@/App";
import { role } from "@/constants/role.constant";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generatorRoutes";
import { withAuth } from "@/utils/withAuth";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const UnAuthorized = lazy(() => import("@/pages/UnAuthorized"));
const Homepage = lazy(() => import("@/pages/HomePage"));
const Booking = lazy(() => import("@/pages/Booking"));
const TourDetails = lazy(() => import("@/pages/TourDetails"));
const Tours = lazy(() => import("@/pages/Tour"));
const Success = lazy(() => import("@/pages/payment/Success"));
const Fail = lazy(() => import("@/pages/payment/Fail"));
const Verify = lazy(() => import("@/pages/About"));
const DashboardLayout = lazy(
  () => import("@/components/layout/DashboardLayout")
);

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: Tours,
        path: "tours",
      },
      {
        Component: TourDetails,
        path: "tours/:id",
      },
      {
        Component: withAuth(About),
        path: "about",
      },
      {
        Component: withAuth(Booking),
        path: "booking/:id",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.ADMIN as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.USER as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/bookings" /> },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: UnAuthorized,
    path: "/unauthorized",
  },
  {
    Component: Success,
    path: "/payment/success",
  },
  {
    Component: Fail,
    path: "/payment/fail",
  },
]);
