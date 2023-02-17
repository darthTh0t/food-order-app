import React from "react";
import "./styles/Header.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChatIcon from "@mui/icons-material/Chat";

const Header = () => {
  const navigate = useNavigate();
  const headerLinks = [
    {
      path: "/cart",
      icon: <ShoppingCartIcon />,
    },

    {
      path: "/contact",
      icon: <ChatIcon />,
    },

    {
      path: "/myAccount",
      icon: <PersonIcon />,
    },
  ];
  const styleLogo = {
    fontFamily: `Josefin Sans`,
    fontSize: "2.5rem",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E96479",
    alignItems: "center",
  };
  return (
    <>
      <div style={headerStyle}>
        <div
          className="logoName"
          style={{
            padding: "0 3rem",
            cursor: "pointer",
          }}
          onClick={() => navigate("/order")}
        >
          <motion.h3
            style={styleLogo}
            whileHover={{ scale: 1.05, type: "spring" }}
          >
            zwigato
          </motion.h3>
        </div>

        <div className="shopLink">
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 3rem",
            }}
          >
            {headerLinks.map((link) => (
              <li
                key={link.path}
                style={{
                  padding: "0 1.5rem",
                  cursor: "pointer",
                }}
              >
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Link to={link.path}>{link.icon}</Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
