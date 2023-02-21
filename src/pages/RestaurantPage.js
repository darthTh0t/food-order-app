import { lazy, React } from "react";
import "./styles/RestaurantPage.css";

const LazyRestComp = lazy(() => import("../components/RestaurantDetails"));
const RestaurantPage = () => {
  return (
    <>
      <div className="rootDiv">
        Restaurant Page
        <div className="restDet">
          <LazyRestComp />
          <LazyRestComp />
          <LazyRestComp />
          <LazyRestComp />
          <LazyRestComp />
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
