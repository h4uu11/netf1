import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="logo">
        <img src="/assets/img/netf1ix.svg" alt="" />
      </Link>
      <Link to={"/"}>HOME</Link>
      <Link to={"/movie"}>MOVIE</Link>
      <Link to={"/tv"}>TV</Link>
    </div>
  );
};

export default Header;
