import React from "react";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import CardDetails from "./component/CardDetails";
import Footer from "./component/Footer"; // Import the Footer component

const App = () => {
  const AppLayout = () => {
    return (
      <div>
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipe/:id",
          element: <CardDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
