import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import LoginForm from "../../features/users/LoginForm";
import NotFound from "../../features/errors/NotFound";
import TestErrors from "../../features/errors/TestError";
import ServerError from "../../features/errors/ServerError";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "projects", element: <ActivityDashboard /> },
      { path: "projects/:id", element: <ActivityDetails /> },
      { path: "createProject", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm key="manage" /> },
      { path: "errors", element: <TestErrors /> },
     { path: "not-found", element: <NotFound /> },
     { path: "server-error", element: <ServerError /> },
     { path: "*", element: <Navigate replace to='/not-found' /> },
      { path: "login", element: <LoginForm /> },
    ],
  },
];

export const router = createBrowserRouter(routes);