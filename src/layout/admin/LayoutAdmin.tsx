import { HeaderAdmin, SidebarAdmin } from "@/components";
import {
  AccountManagement,
  CategoryManagement,
  Dashboard,
  PostManagement,
  ReportManagement,
  RevenueManage,
} from "@/pages";
import { useRoutes } from "react-router-dom";

const LayoutAdmin = () => {
  const elements = useRoutes([
    { path: "/account", element: <AccountManagement /> },
    { path: "/post", element: <PostManagement /> },
    { path: "/report", element: <ReportManagement /> },
    { path: "/revenue", element: <RevenueManage /> },
    { path: "/category", element: <CategoryManagement /> },
    { path: "/", element: <Dashboard /> },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HeaderAdmin />

      <div className="flex flex-1">
        {/* Sider */}
        <SidebarAdmin />

        {/* Content */}
        <main className="bg-gray-50 flex-1 p-4 text-white">{elements}</main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
