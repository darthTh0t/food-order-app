import React from "react";
import { motion } from "framer-motion";
import "./styles/LandingPage.css";
import SignIn from "../components/SignIn";

const LandingPage = () => {
  const landingText = "zwigato".split("");
  return (
    <div className="landingPage">
      <div className="landingText">
        {landingText.map((word) => (
          <motion.h1
            key={word}
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.2 }}
            style={{ cursor: "pointer" }}
            className="text-center"
          >
            {word}
          </motion.h1>
        ))}
      </div>
      <SignIn />
    </div>
  );
};

export default LandingPage;
