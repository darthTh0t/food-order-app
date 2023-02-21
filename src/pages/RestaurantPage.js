import { lazy, React, useEffect, useState } from "react";
import "./styles/RestaurantPage.css";

const LazyRestComp = lazy(() => import("../components/RestaurantDetails")); //lazy loading

const RestaurantPage = () => {
  const REST_DET_URL = "http://localhost:5500/content";

  const [details, setDetails] = useState([]);

  //load the details when the page loads
  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(REST_DET_URL);
      const getDetails = await response.json();
      setDetails(getDetails);
    }
    fetchDetails();
  }, []);

  return (
    <>
      <div className="rootDiv">
        Restaurant Page
        <div className="restDet">
          {details.map((result) => (
            <LazyRestComp
              key={result.id}
              name={result.name}
              time={result.time}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
