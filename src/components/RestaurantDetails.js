import React from "react";
import { motion } from "framer-motion";
import "./styles/RestaurantDetails.css";

const RestaurantDetails = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      className="restComp"
    >
      <h1>Image</h1>
      <h3>{props.name}</h3>
      <p>{props.time}</p>
    </motion.div>
  );
};

export default RestaurantDetails;
