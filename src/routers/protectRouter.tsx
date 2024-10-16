import { Home, Login, Register } from "@/pages";
import { selectIsAuthenticated } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/stores";
import React, { ComponentType } from "react";
import { useSelector } from "react-redux";

interface PrivateRouterUserProps {
  Page: ComponentType;
}
const protectRouter: React.FC<PrivateRouterUserProps> = ({ Page }) => {
  const isAuthenticated = useSelector((state: RootState) =>
    selectIsAuthenticated(state)
  );
  const elementAuth: ComponentType[] = [Login, Register];

  if (elementAuth.includes(Page)) {
    return <Home />;
  }

  return isAuthenticated ? <Page /> : <Login />;
};

export default protectRouter;
