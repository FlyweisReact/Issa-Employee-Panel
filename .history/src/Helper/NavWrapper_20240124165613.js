/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";

const NavWrapper = ({ title, filled, empty, isArrow }) => {
  const navigate = useNavigate();

  const filledArr = Array.from({ length: filled });
  const emptyArr = Array.from({ length: empty });

  return (
    <div className="nav-wrap-personal">
      {isArrow && (
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
      )}

      
    </div>
  );
};

export default NavWrapper;
