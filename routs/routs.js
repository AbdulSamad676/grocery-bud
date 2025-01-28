import AuthLayout from "../src/layouts/AuthLayout";
import DashboardLayout from "../src/layouts/DashboardLayout";
import MainLayout from "../src/layouts/MainLayout";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import LandingPage from "../src/pages/Landing/LandingPage";
import LoginPage from "../src/pages/Login/Login";

import SignUp from "../src/pages/SignUp/SignUp";

export const routesConfig = [
  {
    path: "/login",
    component: LoginPage,
    layout: AuthLayout,
  },
  {
    path: "/sign-up",
    component: SignUp,
    layout: AuthLayout,
  },
  {
    path: "/",
    component: LandingPage,
    layout: MainLayout,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: DashboardLayout,
  },
];
