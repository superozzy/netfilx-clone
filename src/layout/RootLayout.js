import React from "react";
import { Outlet } from "react-router-dom";

import UserNavPage from "../components/UserNavPage";

const RootLayout = () => {
  return (
    <nav>
      <UserNavPage />

      <main>
        <Outlet />
      </main>
    </nav>
  );
};

export default RootLayout;
