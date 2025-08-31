import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import HotJobs from "../Components/HotJobs";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../Pages/JobApply";
import MyApplications from "../Pages/MyApplications";
import ErrorPages from "../Pages/ErrorPages";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Components/ViewApplications";
import About from "../Pages/About";
import Contact from "../Components/Contact";
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
          fetch(
            `https://career-code-server-rouge.vercel.app/jobs/${params.id}`
          ),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },
      {
        path:'/applications/:job_id',
        loader:({params})=> fetch(`https://career-code-server-rouge.vercel.app/applications/job/${params.job_id}`),
        element:<PrivateRoutes>
          <ViewApplications></ViewApplications>
        </PrivateRoutes>
      },
      {
        path:'my-Posted-Jobs',
        element:<PrivateRoutes>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoutes>
      },
      {
        path:'/add-Job',
        element:<PrivateRoutes>
          <AddJob></AddJob>
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
        path: "/about",
        Component: About
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPages,
  },
]);
