import LayoutAdmin from "@/layout/admin";
import LayoutUser from "@/layout/user";
import {
  Forget,
  Login,
  Register,
  VerifyOTP
} from "@/pages";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const elenemts = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/sendOTP", element: <VerifyOTP /> },
    { path: "/forgetpassword", element: <Forget /> },

    //user
    { path: "/*", element: <LayoutUser /> },

    // admin
    { path: "/admin/*", element: <LayoutAdmin /> }
  ]);
  return <div>{elenemts}</div>;
};

export default Router;
