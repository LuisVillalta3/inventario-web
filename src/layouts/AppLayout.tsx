import React from "react";
import "./AppLayout.scss";
import AppHeader from "./AppHeader";
import AppAside from "./AppAside";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <div className="content">
        <AppAside />
        <main>{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
