import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "@/pages/Home/Home/Home";
import Login from "@/pages/Login/Login";
import SignIn from "@/pages/Login/SignIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
