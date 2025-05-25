import {
  createBrowserRouter
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/login',
        Component:Login
      }
    ]
  },
]);