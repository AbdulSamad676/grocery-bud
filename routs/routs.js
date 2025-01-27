import AuthLayout from "../src/layouts/AuthLayout";
import DashboardLayout from "../src/layouts/DashboardLayout";
import MainLayout from "../src/layouts/MainLayout";
// import Chat from "../src/pages/Chat";
// import User from "../src/pages/User";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import LandingPage from "../src/pages/Landing/LandingPage";
import LoginPage from "../src/pages/Login/Login";
// import Help from "../src/pages/Help";
import SignUp from "../src/pages/SignUp/SignUp";
// import AuthLayout from '';
// import DashboardLayout from '../layouts/DashboardLayout';

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
  //   {
  //     path: '/chat',
  //     component: Chat,
  //     layout: DashboardLayout,
  //   },
  //   {
  //     path: '/user',
  //     component: User,
  //     layout: DashboardLayout,
  //   },
  //   {
  //     path: '/help',
  //     component: Help,
  //     layout: DashboardLayout,
  //   },
  // {
  // 	path: '/calender',
  // 	component: Calender,
  // 	layout: DashboardLayout,
  // },
  // {
  // 	path: '/profile',
  // 	component: Profile,
  // 	layout: DashboardLayout,
  // },
];
