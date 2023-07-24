import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Shared/Navbar/Profile";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/",
          element: <Register></Register>
        },
        {
          path: "/profile",
          element: <Profile></Profile>
        },
        {
          path: "/colleges/:id",
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params}) => fetch(`https://admit-jet-server.vercel.app/colleges/${params.id}`)
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;