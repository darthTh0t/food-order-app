import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import { lazy, Suspense } from "react";

//Lazy loading components
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AccountDetails = lazy(() => import("./pages/AccountDetails"));

function App() {
  //Routing elements
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />} errorElement={<ErrorPage />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/order"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <RestaurantPage />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback="Loading...">
              <CartPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/myAccount"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <AccountDetails />
            </Suspense>
          }
        />
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
