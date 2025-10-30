import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { withSuspense } from "../utils/WithSuspense";
// Lazy load de páginas
const MainLayout = withSuspense(lazy(() => import("../layouts/MainLayout")));
const TaskView = withSuspense(lazy(() => import("../view/taskView")));
const UserView = withSuspense(lazy(() => import("../view/UserView")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TaskView />,
      },
      {
        path: "users",
        element: <UserView />,
      }
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
