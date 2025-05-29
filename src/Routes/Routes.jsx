import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import HotJobs from "../Components/HotJobs";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../Pages/JobApply";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {path:'/jobApply/:id',
        element:<PrivateRoutes>
          <JobApply></JobApply>
        </PrivateRoutes>
      },
      {
        path: "/jobs",
        Component: HotJobs,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
