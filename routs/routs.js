import AuthLayout from "../src/layouts/AuthLayout";
// import DashboardLayout from "../src/layout/DashbordLayout";
// import Chat from "../src/pages/Chat";
// import User from "../src/pages/User";
// import Dashboard from "../src/pages/Dashboard";
import LoginPage from "../src/pages/Login/Login";
// import Help from "../src/pages/Help";
import SignUp from "../src/pages/SignUp/SignUp";
// import AuthLayout from '';
// import DashboardLayout from '../layouts/DashboardLayout';

export const routesConfig = [
  {
    path: "/",
    component: LoginPage,
    layout: AuthLayout,
  },
  {
    path: "/sign-up",
    component: SignUp,
    layout: AuthLayout,
  },
  // {
  // 	path: '/auth/register',
  // 	component: Register,
  // 	layout: AuthLayout,
  // },
  //   {
  //     path: '/dashboard',
  //     component: Dashboard,
  //     layout: DashboardLayout,
  //   },
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
