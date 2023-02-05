import React from "react";
import NavBar from "../components/NavBar/NavBar";
import itemListContainer from "../components/itemListContainer/itemListContainer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <itemListContainer />
    </>
  );
};

export default Layout;
