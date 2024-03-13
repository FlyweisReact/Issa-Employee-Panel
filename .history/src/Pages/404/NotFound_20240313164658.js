/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src="/404.jpg" alt="" />
      <p>
        Unfortunately the page you are looking for has been moved or deleted
      </p>
      <Link></Link>
      <button>GO TO HOMEPAGE</button>
    </div>
  );
};

export default NotFound;
