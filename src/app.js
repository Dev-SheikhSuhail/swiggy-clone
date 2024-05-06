import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import BodyComp from "./components/Body";
import FooterComp from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import SignIn from "./components/SignIn";
import Contact from "./components/Help";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
/*
    1). Header:
            - Logo
            - Nav bar
            - Cart
    2). Body:
            - Search Bar
            - Restaurant List:
                - Cards: Image, Rating, Name, Cuisines
    3). Footer:
            - Links
            - Copyright
*/
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterComp />
    </>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComp />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h3>Loading.......</h3>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Help",
        element: <Contact />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
