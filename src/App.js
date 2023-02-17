import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  LandingPage,
  // ErrorPage,
  RestaurantPage,
  CartPage,
  ContactPage,
  AccountDetails,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/order" element={<RestaurantPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/myAccount" element={<AccountDetails />} />
      </Route>
    )
  );
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
