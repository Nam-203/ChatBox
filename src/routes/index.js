import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "./../layouts/main/index";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },
        { path: "verify", element: <VerifyPage /> },

      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "/app", element: <GeneralApp /> },
        { path: "/group", element: <GroupPage /> },
        { path: "/call", element: <CallPage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login.js")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register.js")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPassword.js"))
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword.js"))
);
const VerifyPage = Loadable(lazy (() => import("../pages/auth/Verify.js")));
const ProfilePage = Loadable(lazy(() => import("../pages/dashboard/Profile.js")));
const GroupPage = Loadable(lazy(() => import("../pages/dashboard/Group.js")));
const CallPage = Loadable(lazy(() => import("../pages/dashboard/Call.js")));
