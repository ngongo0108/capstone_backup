import LayoutAdmin from "@/layout/admin";
import LayoutUser from "@/layout/user";
import { Forget, Login, Register, VerifyOTP } from "@/pages";
import { useRoutes } from "react-router-dom";
import ProtectRouter from "./protectRouter";

const Router = () => {
  const elenemts = useRoutes([
    { path: "/login", element: <ProtectRouter Page={Login} /> },
    { path: "/register", element: <ProtectRouter Page={Register} /> },
    { path: "/sendOTP", element: <ProtectRouter Page={VerifyOTP} /> },
    { path: "/forgetpassword", element: <ProtectRouter Page={Forget} /> },

    //user
    { path: "/*", element: <ProtectRouter Page={LayoutUser} /> },

    // admin
    { path: "/admin/*", element: <ProtectRouter Page={LayoutAdmin} /> },
  ]);
  return <div>{elenemts}</div>;
};

export default Router;
