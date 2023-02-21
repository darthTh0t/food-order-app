import { lazy, React, useEffect, useState } from "react";
import "./styles/RestaurantPage.css";

//lazy loading
const LazyRestComp = lazy(() => import("../components/RestaurantDetails"));
const LazyHeader = lazy(() => import("../components/RestHeader"));

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
        <LazyHeader />
        <div className="restDet">
          {details.map((result) => (
            <LazyRestComp
              key={result.id}
              name={result.name}
              time={result.time}
              image={result.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
