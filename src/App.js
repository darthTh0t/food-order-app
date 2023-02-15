import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { LandingPage, ErrorPage, RestaurantPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/order",
      element: <RestaurantPage />,
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
