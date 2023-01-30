import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Body from "../components/Body/body";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Body />
    </>
  );
};

export default Layout;
