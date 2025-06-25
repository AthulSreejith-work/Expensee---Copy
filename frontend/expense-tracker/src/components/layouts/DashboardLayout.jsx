import React, { useState, useContext } from "react";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import { UserContext } from "../../context/UserContext";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar receives toggle and current state */}
      <Navbar
        activeMenu={activeMenu}
        toggleSideMenu={() => setIsMenuOpen((prev) => !prev)}
        isMenuOpen={isMenuOpen}
      />

      <div className="flex">
        {/* SideMenu: visible on lg+ screens or if menu is open on smaller screens */}
        <div
          className={`
            ${isMenuOpen ? "block" : "hidden"} 
            fixed z-30 top-[61px] left-0 lg:static lg:block
          `}
        >
          <SideMenu activeMenu={activeMenu} />
        </div>

        {/* Main content */}
        <div className="grow p-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
